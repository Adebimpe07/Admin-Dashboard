import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { ModalsProvider } from "@mantine/modals";
import { MantineProvider } from "@mantine/core";
import HeaderMain from "../src/components/main/header";
import Aside from "../src/components/aside/aside";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <MantineProvider>
        <ModalsProvider>
          {/* <HeaderMain /> */}
          <Aside />
          <Component {...pageProps} />
        </ModalsProvider>
      </MantineProvider>
    </div>
  );
}
export default MyApp;
