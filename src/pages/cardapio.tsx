import {
  Box,
  Button,
  createStyles,
  Flex,
  Grid,
  Stack,
  Text,
} from "@mantine/core";
import Head from "next/head";
import Image from "next/image";

import redIcon from "@/assets/icon-bakeit-red.png";
import cakeImage from "@/assets/cake3-bakeit.jpg";
import { LogoDivider } from "@/components/Divider";

const useStyles = createStyles((theme) => ({
  flex: {
    width: "100%",
    height: "auto",
    padding: "8% 10%",
    alignItems: "center",
    gap: "10%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    flex: 1,
    gap: "24px",
  },
  button: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: "Mermaid",

    textAlign: "center",

    alignSelf: "center",

    backgroundColor: theme.colors.secondary[0],

    width: "fit-content",
    height: "45px",
  },
}));

export default function Cardapio() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Bake It | Cardápio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Stack align="center">
        <LogoDivider/>
        <Text ff="Mermaid" c="black" fz={30} fw={700}>
          CARDÁPIO BAKE IT
        </Text>
      </Stack>
      <Flex className={classes.flex}>
        <Box className={classes.content}>
          <Text component="p" ff="Chaparral" c="#404040" fz={20} ta="justify">
            Somos especializados na produção de bolos e doces para festas e
            eventos, trabalhamos apenas com encomendas e recomendamos que as
            solicitações sejam feitas com antecedência. Nossa variedade inclui
            diversos sabores de bolos, brigadeiros e outros produtos. Além
            disso, oferecemos opções personalizadas com decoração artística em
            pasta americana e "chantininho" vegano.
          </Text>
          <Button
            className={classes.button}
            color="red"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.bakeit.com.br/wp-content/uploads/2023/12/DOC-20231215-WA0020..pdf"
          >
            Visualizar cardápio
          </Button>
        </Box>
        <Box
          w="100%"
          h="auto"
          sx={{
            position: "relative",
            aspectRatio: "763 / 1024",
            boxShadow: "0 0 26px -4px rgba(0,0,0,0.63)",
            flex: 1,
          }}
        >
          <Image src={cakeImage} alt="Foto Bolo" fill={true} />
        </Box>
      </Flex>
    </>
  );
}
