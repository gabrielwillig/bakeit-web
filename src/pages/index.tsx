import Head from "next/head";

import cake from "@/assets/cake-bakeit.jpg";
import candy from "@/assets/candy-bakeit.jpg";
import whiteIcon from "@/assets/icon-bakeit-white.png";

import { BackgroundImage, Box, Button, createStyles, Text } from "@mantine/core";

import { Carousel } from "@mantine/carousel";
import Image from "next/image";

import { fonts } from "@/styles/fonts";
import Link from "next/link";

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

  },
  text: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: fonts.serif,

    color: "white",

    textAlign: "center",
  },
  button: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: fonts.serif,

    color: "rgba(0, 0, 0, 1)",

    textAlign: "center",

    backgroundColor: "white",

    width: "80%",

    height: "45px",

    ":hover": {
      backgroundColor: theme.colors.tertiary[0],
    }
  }
}));

export default function Home() {

    const { classes } = useStyles();

    return(
    <>
      <Head>
        <title>Bake It</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Carousel height="760px" w="100%" slideGap="xs" controlsOffset="md" controlSize={28} loop>
        <Carousel.Slide>
          <BackgroundImage src={cake.src} w="100%" h="100%" className={classes.slide}>
            <Box className={classes.infoBox}>
              <Box className={classes.whiteBox}>
                <Box mx="20%">
                  <Image src={whiteIcon} alt="Bake It White Icon" layout="responsive"/>
                </Box>
                <Text className={classes.text}>PRODUTOS ARTESANAIS SEM ORIGEM ANIMAL</Text>
                <Button className={classes.button} component="a" rel="noopener noreferrer" href="/produtos">
                  PRODUTOS
                </Button>
              </Box>
            </Box>
          </BackgroundImage>
        </Carousel.Slide>
        <Carousel.Slide>
          <BackgroundImage src={candy.src} w="100%" h="100%">
          </BackgroundImage>
        </Carousel.Slide>
      </Carousel>
    </>
    )
};