import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import axios from "axios";

const CreatedAssessSubHeader = ({ selectedCategory }) => {
  const router = useRouter();
  const [err, setErr] = useState("");

  const handleAddCategory = () => {
    selectedCategory.map((item) => {
      axios({
        method: "patch",
        url: `${process.env.NEXT_PUBLIC_BASE_URL_2}/api/assessment/2/category/${item.id}`,
      })
        .then(function (response) {
          console.log(response.data);
          if (response.data.data.message === "Category removed") {
            alert(
              `<code>${item.name}<code> has been removed because it already existed, if you do not want that, kindly add the category again`
            );
          }
        })
        .catch(function (error) {});
    });
    router.push("/assessments/assessment");
  };

  return (
    <div className="flex justify-between p-4 ">
      <div className="flex items-center gap-1">
        <ArrowLeft2 size="17" color="#000" />
        <Link href="/assessments/assessment/create_assessment">
          <h1 className="cursor-pointer">Back {err ? err + " " : null}</h1>
        </Link>
      </div>
      <Button
        onClick={handleAddCategory}
        className="bg-greenButton hover:bg-greenButton text-base"
      >
        Submit
      </Button>
    </div>
  );
};

export default CreatedAssessSubHeader;
