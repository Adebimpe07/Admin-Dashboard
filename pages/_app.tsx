import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { ModalsProvider } from "@mantine/modals";
import { MantineProvider } from "@mantine/core";
import HeaderMain from "../src/components/main/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <ModalsProvider>
        <HeaderMain />
        <Component {...pageProps} />
      </ModalsProvider>
    </MantineProvider>
  );
}
export default MyApp;
