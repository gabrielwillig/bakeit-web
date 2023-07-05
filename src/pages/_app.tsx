import { theme } from "@/styles/theme";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import Head from "next/head";

import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bake It</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
