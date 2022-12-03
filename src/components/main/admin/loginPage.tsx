import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import React, { useContext, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../../assets/Afex_logo.png";
import EnterEmail from "./enterEmail";
import { useForm } from "@mantine/form";
import axios from "axios";
import jwtDecode from "jwt-decode";
import FormContext from "../../../context/store";
import { useRouter } from "next/router";
import Loading from "../../loading";
const loginPage = () => {
  const { setToken, setAdmin } = useContext(FormContext);
  const [visible, { toggle }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_BASE_URL_1}/api/v1/account/admin/login`,
      data: form.values,
    };

    // refresh token and access token

    axios(config)
      .then(function (response) {
        setToken(response.data.data);
        console.log(jwtDecode(response.data.data.access));
        setAdmin(jwtDecode(response.data.data.access));
        setLoading(false);
        router.push("/");
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <form className="bg-[#E5E5E5] flex-1 flex flex-col items-center justify-center pb-8 h-screen">
      <img width="124px" src={Logo.src} alt="" />
      <div className="bg-[#fff] flex flex-col rounded-2xl p-7 leading-5 w-[30rem] mt-4 shadow-xl shadow-[0px 51.8664px 76.6208px rgba(193, 194, 198, 0.19)]">
        <p>Sign in to ATS Admin</p>
        <div>
          <TextInput
            placeholder="email.com"
            label="Email"
            withAsterisk
            {...form.getInputProps("email")}
          />
          <PasswordInput
            withAsterisk
            label="Password"
            visible={visible}
            onVisibilityChange={toggle}
            {...form.getInputProps("password")}
          />
        </div>
        <Checkbox label="Remember me" className="mt-4" />
        <Button
          onClick={(e) => handleSubmit(e)}
          className="bg-greenButton hover:bg-greenButton my-4"
        >
          Sign in
        </Button>
        <EnterEmail />
      </div>
      <Loading loading={loading} />
    </form>
  );
};

export default loginPage;
