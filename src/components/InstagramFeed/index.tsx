import { INSTA_TOKEN } from "@/utils/constants";
import { Carousel } from "@mantine/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { Box, createStyles } from "@mantine/core";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface IFeedItem {
  id: string;
  media_type: "IMAGE" | "VIDEO";
  media_url: string;
  permalink: string;
};

type InstaFeedProps = {
    limit?: number;
};

const useStyles = createStyles((theme) => ({
    item: {
        width: "100%",
        height: "100%",
    },
    carouselContainer: {
      width: "450px",
      height: "450px",
    },
    post: {
      width: "450px",
      height: "450px",
      borderRadius: "5%",
    }
}));

export function InstaFeed({limit}: InstaFeedProps) {

  const [ feedList, setFeedList] = useState<IFeedItem[]>([]);

  const [ counter, setCounter] = useState(0);

  async function getInstaFeed() {

    const token = INSTA_TOKEN;
    const fields = "media_url,media_type,permalink";
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&limit=${limit}`;

    const { data } = await axios.get(url);

    setFeedList(data.data);

  }

  useEffect(() => {
    getInstaFeed();
    console.log(counter);
    setCounter(counter + 1);
  }, []);

  const { classes } = useStyles();

  const autoplay = useRef(Autoplay());

  return (
    <Box className={classes.carouselContainer}>
      <Carousel
        height="auto"
        w="100%"
        h="100%"
        slideGap="0"
        controlsOffset="md"
        controlSize={28}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        withIndicators
      >
        {feedList.map((item) => (
          <Carousel.Slide key={item.id}>
              <Link
                href={item.permalink}
                target="_blank"
                className={classes.item}
              >
              {item.media_type === "IMAGE" ? (
                  <img src={item.media_url} className={classes.post}/>
              ) : (
                  <video controls className={classes.post}>
                    <source src={item.media_url}></source>
                  </video>
              )}
              </Link>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
