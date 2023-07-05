import { bakeItSocials } from "@/utils/constants";
import { Button, createStyles, UnstyledButton } from "@mantine/core";
import { FaWhatsapp } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
    button: {
        position: "fixed",

        bottom: 32,
        right: 32,

        width: 64,
        height: 64,

        color: "#36A884",

        ':hover': {
            transform: "scale(1.1)",
        },

        ':active': {
            transform: "scale(0.9)",
        },
    }

}));

export function CornerButton () {

    const { classes } = useStyles();

    return(
        <UnstyledButton className={classes.button} component="a" target="_blank" href={bakeItSocials.WHATSAPP}>
            <FaWhatsapp size="100%"/>
        </UnstyledButton>
    );
};