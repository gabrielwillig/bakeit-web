import { Box, Text } from "@mantine/core";
import Head from "next/head";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

export default function ABakeIt() {
  
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <>
      <Head>
        <title>Bake It | A Bake It</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Carousel
        maw={320}
        mx="auto"
        withIndicators
        height={200}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </>
  );
}
