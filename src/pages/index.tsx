import Head from "next/head";

import cake from "@/assets/cake-bakeit.jpg";
import candy from "@/assets/candy-bakeit.jpg";
import whiteIcon from "@/assets/icon-bakeit-white.png";

import {
  BackgroundImage,
  Box,
  Button,
  createStyles,
  Grid,
  Stack,
  Text,
} from "@mantine/core";

import { Carousel } from "@mantine/carousel";
import Image from "next/image";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { InstaFeed } from "@/components/InstagramFeed";

const useStyles = createStyles((theme) => ({
  slide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  infoBox: {
    width: "20%",
    height: "65%",

    backgroundColor: "rgba(0,0,0, 0.33)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "2.5%",

    borderRadius: "5%",
  },
  whiteBox: {
    border: "3px solid white",
    width: "100%",
    height: "100%",

    padding: "2.5%",

    display: "flex",
    flexDirection: "column",

    gap: "16px",

    alignItems: "center",
    justifyContent: "center",

    borderRadius: "5%",
  },
  text: {
    fontSize: 24,
    fontWeight: 700,

    color: "white",

    textAlign: "center",
  },
  button: {
    fontSize: 24,
    fontWeight: 700,

    color: "rgba(0, 0, 0, 1)",

    textAlign: "center",

    backgroundColor: "white",

    width: "200px",
    height: "45px",

    ":hover": {
      backgroundColor: theme.colors.tertiary[0],

      transition: "0.15s ease",
    },
  },
  aboutUs: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",

    color: "black",

    fontSize: 20,

    textAlign: "justify",
  },
  anchor: {
    width: "fit-content",

    display: "flex",
    alignItems: "center",
    gap: "5px",

    color: theme.colors.secondary[0],

    position: "relative",

    "::after": {
      position: "absolute",
      bottom: 0,
      content: "''",
      width: "100%",
      height: 2,
      backgroundColor: theme.colors.secondary[0],
      transition: "0.15s ease-out",
      opacity: 0,
    },

    ":hover": {
      "::after": {
        transition: "0.15s ease-out",
        opacity: 1,
      },
    },
  },
  gridCol: {
    width:"100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Bake It</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Stack>
        <Carousel
          height="760px"
          w="100%"
          slideGap="xs"
          controlsOffset="md"
          controlSize={28}
          loop
        >
          <Carousel.Slide>
            <BackgroundImage
              src={cake.src}
              w="100%"
              h="100%"
              className={classes.slide}
            >
              <Box className={classes.infoBox}>
                <Box className={classes.whiteBox}>
                  <Box mx="20%">
                    <Image
                      src={whiteIcon}
                      alt="Bake It White Icon"
                      width={120}
                    />
                  </Box>
                  <Text className={classes.text}>
                    Produtos artesanais sem origem animal
                  </Text>
                  <Link href="/produtos">
                    <Button className={classes.button}>Produtos</Button>
                  </Link>
                </Box>
              </Box>
            </BackgroundImage>
          </Carousel.Slide>
          <Carousel.Slide>
            <BackgroundImage
              src={candy.src}
              w="100%"
              h="100%"
              className={classes.slide}
            >
              <Box className={classes.infoBox}>
                <Box className={classes.whiteBox}>
                  <Box mx="20%">
                    <Image
                      src={whiteIcon}
                      alt="Bake It White Icon"
                      width={120}
                    />
                  </Box>
                  <Text className={classes.text}>Faça sua encomenda</Text>
                  <Link href="/contato">
                    <Button className={classes.button}>Contato</Button>
                  </Link>
                </Box>
              </Box>
            </BackgroundImage>
          </Carousel.Slide>
        </Carousel>
        <Grid columns={2} w="100%" gutter="xl" p="2% 10%">
          <Grid.Col span={1} className={classes.gridCol}>
            <Stack className={classes.aboutUs}>
              <Text fw={700} fz={26}>
                <Text component="span" ff="Mermaid">
                  JÁ CONHECE A BAKE IT ?
                </Text>
              </Text>
              <Text ff="Chaparral" ml={16}>
                Somos uma empresa fundada em 2014, na encantadora cidade
                litorânea de Matinhos, no Paraná. Desde nossa criação, temos
                como principal missão apresentar ao público a incrível,
                deliciosa e surpreendente culinária vegana, livre de
                ingredientes de origem animal. Especializados em releituras da
                confeitaria tradicional, destacamo-nos no mercado ao oferecer
                opções veganas de alta qualidade que agradam aos mais exigentes
                paladares. Na Bake It, acreditamos que a alimentação vegana pode
                ser uma experiência verdadeiramente gratificante.
              </Text>
              <Link href="/a-bake-it" className={classes.anchor}>
                <Text ff="Mermaid">Confira nossa história</Text>
                <FaChevronRight size={16} />
              </Link>
            </Stack>
          </Grid.Col>
          <Grid.Col span={1} className={classes.gridCol}>
            <InstaFeed limit={3} />
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
}
