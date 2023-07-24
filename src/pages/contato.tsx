import { Box, createStyles, Flex, Grid, Stack, Text } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";

import redIcon from "@/assets/icon-bakeit-red.png";

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
      <Stack align="center" justify="center">
        <Box
          w="64px"
          h="auto"
          sx={{
            position: "relative",
            aspectRatio: "1",
            justifySelf: "center",
          }}
        >
          <Image src={redIcon} alt="Icon Vermelho" fill={true} />
        </Box>
        <Text ff="Mermaid" c="black" ta="center" fz={26} fw={700}>
          FALE CONOSCO
        </Text>
      </Stack>
    </>
  );
}
