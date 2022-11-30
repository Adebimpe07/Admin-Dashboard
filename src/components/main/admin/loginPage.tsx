import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import React, { useContext } from "react";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../../assets/Afex_logo.png";
import EnterEmail from "./enterEmail";
import { useForm } from "@mantine/form";
import axios from "axios";
import jwtDecode from "jwt-decode";
import FormContext from "../../../context/store";
import { useRouter } from "next/router";
const loginPage = () => {
    const { setToken, setAdmin } = useContext(FormContext);
    const [visible, { toggle }] = useDisclosure(false);
    const router = useRouter();
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        var config = {
            method: "post",
            url: "https://atsbk.afexats.com/api/v1/account/admin/login",
            data: form.values,
        };

        // refresh token and access token

        axios(config)
            .then(function (response) {
                setToken(response.data.data);
                console.log(jwtDecode(response.data.data.access));
                setAdmin(jwtDecode(response.data.data.access));
                router.push("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <form className="bg-[#E5E5E5] flex-1 flex flex-col items-center justify-center pb-8 h-screen">
            <img width="124px" src={Logo.src} alt="" />
            <div className="bg-[#fff] flex flex-col rounded-2xl p-7 leading-5 w-[30rem] mt-4">
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
                    className="bg-greenButton hover:bg-greenButton my-4">
                    Sign in
                </Button>
                <EnterEmail />
            </div>
        </form>
    );
};

export default loginPage;