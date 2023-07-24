import { LogoDivider } from "@/components/Divider";
import { Stack, Text, Title } from "@mantine/core";
import Head from "next/head";

export default function Cardapio() {
  

  return (
    <>
      <Head>
        <title>Bake It | Produtos</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Stack align="center">
        <LogoDivider/>
        <Text ff="Mermaid" c="black" fz={30} fw={700}>
            NOSSOS PRODUTOS
        </Text>
        </Stack>   
    </>
  );
}
