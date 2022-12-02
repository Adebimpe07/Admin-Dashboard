import React, { useEffect, useState } from "react";

import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import { Button, Select, Textarea, TextInput } from "@mantine/core";
import Header from "../categoryCreate/header";
import { useRouter } from "next/router";
import axios from "axios";
import { useForm } from "@mantine/form";
import Loading from "../../../loading";

const EditCategoryPage = ({ id }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: `https://assessbk.afexats.com/api/categories/${id}`,
    })
      .then((response) => {
        console.log(response.data.data.name);
        form.values.name = response.data.data.name;
        form.values.category_info = response.data.data.category_info;
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const editAssessment = (id) => {
    setLoading(true);
    axios({
      method: "patch",
      url: `https://assessbk.afexats.com/api/categories/${id}`,
      data: form.values,
    })
      .then((response) => {
        console.log(response.data);
        router.push("/assessments/categories");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.error.non_field_errors);
        setLoading(false);
      });
  };

  const form = useForm({
    initialValues: {
      name: "",
      category_info: "",
    },
  });
  const router = useRouter();
  return (
    <main className="h-screen flex-1 py-6 flex flex-col  bg-[#e5e5e5]">
      <Header />
      <div className="flex flex-col">
        <div className="flex items-center pl-4 gap-1 py-4">
          <ArrowLeft2 size="17" color="#000" />
          <Link href="/assessments/categories">
            <h1 className="cursor-pointer">Back to Categories</h1>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center flex-1 mt-8">
        <div className="bg-white p-10 rounded-lg flex flex-col gap-1 w-[40rem]">
          <h1 className="font-semibold text-2x text-2xl pb-2">Edit Category</h1>
          <TextInput
            label="Category Name"
            classNames={{
              label: "!text-base",
            }}
            {...form.getInputProps("name")}
          />
          <Textarea
            label="Description"
            classNames={{
              label: "!text-base",
            }}
            placeholder="Category Description"
            autosize
            minRows={2}
            maxRows={4}
            {...form.getInputProps("category_info")}
          />
          <Button
            onClick={() => editAssessment(id)}
            className="bg-greenButton hover:bg-greenButton w-full mx-auto text-base mt-6"
          >
            Save Changes
          </Button>
        </div>
      </div>
      <Loading loading={loading} />
    </main>
  );
};

export default EditCategoryPage;
