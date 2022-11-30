import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { ModalsProvider } from "@mantine/modals";
import { MantineProvider } from "@mantine/core";
import HeaderMain from "../src/components/main/dashboard/header";
import Aside from "../src/components/aside/aside";
import { FormProvider } from "../src/context/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { useStore } from "../src/store";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.headers.common["API-KEY"] = process.env.APP_API_KEY;
axios.defaults.headers.common["HASH-KEY"] = process.env.HASH_KEY;
axios.defaults.headers.common["REQUEST-TS"] = process.env.REQUEST_TS;

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    // const [admin, setAdmin] = useStore.admin();
    // useEffect(() => {
    //   if (admin) {
    //     router.push("/");
    //   } else {
    //     router.replace("/login");
    //   }
    // }, [admin]);
    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex overflow-auto h-screen">
                <FormProvider>
                    <MantineProvider>
                        <ModalsProvider>
                            {/* <HeaderMain /> */}
                            {router.pathname === "/login" ? (
                                <Component {...pageProps} />
                            ) : (
                                <>
                                    <Aside />
                                    <Component {...pageProps} />
                                </>
                            )}
                        </ModalsProvider>
                    </MantineProvider>
                </FormProvider>
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
export default MyApp;
