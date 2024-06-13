import { Box, createStyles, Stack, Text } from "@mantine/core";
import Image from "next/image";

type ProductProps = {
    image: string;
    title: string;
    text: string;
};

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
  },
}));

export function Product({image, title, text}: ProductProps) {

    const { classes } = useStyles();

    return(
        <Stack className={classes.container}>
            <Image src={image} alt={title}/>
            <Text>{title}</Text>
            <Text>{text}</Text>
        </Stack>
    );
}