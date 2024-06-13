import { LogoDivider } from "@/components/Divider";
import { createStyles, Divider, Flex, Stack, Text } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { bakeItSocials } from "@/utils/constants";
import { MdOutlineEmail } from "react-icons/md";

const useStyles = createStyles((theme) => ({
  grid: {
    width: "100%",
    height: "auto",
    padding: "3% 10%",
  },
  gridCol: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  orderButton: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: "Mermaid",

    textAlign: "center",

    backgroundColor: theme.colors.secondary[0],

    width: "fit-content",
    height: "45px",

    alignSelf: "flex-end",
  },
  socials: {
    gap: "1.5rem",

    marginLeft: "1rem",
    marginRight: "1rem",

    color: "black",
  },
  socialNode: {
    width: "100%",
    alignItems: "center",
    gap: "12px",
  },
  text: {
    fontFamily: "Chaparral",
    color: "#404040",
    fontSize: 20,
    ":hover": {
      textDecoration: "underline",
    },
  },
}));

export default function Contato() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Bake It | Contato</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Stack align="center" mb="3rem">
        <LogoDivider />
        <Text ff="Mermaid" c="black" fz={30} fw={700}>
          FALE CONOSCO
        </Text>
        <Flex w="100%" justify="space-around" align="center" mih="400px">
          <Stack mx="1.5rem" sx={{ gap: "3rem", flex: 1 }} align="center">
            <Text ff="Mermaid" c="black" ta="center" fz={30} fw={700}>
              NOSSAS REDES SOCIAIS
            </Text>
            <Stack className={classes.socials}>
              <Link href={bakeItSocials.FACEBOOK} target="_blank">
                <Flex className={classes.socialNode}>
                  <FaFacebookSquare size={34} color="#AE2E2D" />
                  <Text className={classes.text}>
                    /bakeitconfeitariaartesanal
                  </Text>
                </Flex>
              </Link>
              <Link href={bakeItSocials.INSTAGRAM} target="_blank">
                <Flex className={classes.socialNode}>
                  <FaInstagram size={34} color="#AE2E2D" />
                  <Text className={classes.text}>@bakeitconfeitaria</Text>
                </Flex>
              </Link>
            </Stack>
          </Stack>
          <Divider size="md" color="#FEFEFE" orientation="vertical" />
          <Stack mx="1.5rem" sx={{ gap: "2rem", flex: 1 }} align="center">
            <Text ff="Mermaid" c="black" ta="center" fz={30} fw={700}>
              MANDE UMA MENSAGEM
            </Text>
            <Text ff="Chaparral" c="#404040" fz={22}>
              Entre em contato através de nosso WhattsApp ou E-mail!
            </Text>
            <Stack className={classes.socials}>
              <Link href={bakeItSocials.WHATSAPP} target="_blank">
                <Flex className={classes.socialNode}>
                  <FaWhatsapp size={34} color="#AE2E2D" />
                  <Text className={classes.text}>{bakeItSocials.PHONE}</Text>
                </Flex>
              </Link>
              <Link href={bakeItSocials.EMAIL_TO} target="_blank">
                <Flex className={classes.socialNode}>
                  <MdOutlineEmail size={34} color="#AE2E2D" />
                  <Text className={classes.text}>{bakeItSocials.EMAIL}</Text>
                </Flex>
              </Link>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
