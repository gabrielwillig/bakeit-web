import { createStyles, Text } from "@mantine/core";
import Link from "next/link";
import { ComponentProps } from "react";

type AnchorStyleProps = {
    isActive?: boolean;
    isScrolled?: boolean;
};

type AnchorProps = {
    isActive?: boolean;
    isScrolled?: boolean;
} & ComponentProps<typeof Link>;

const useStyles = createStyles((theme, _params: AnchorStyleProps) => ({
  navLink: {

    color: "inherit",

    fontSize: 18,

    fontWeight: 700,

    position: "relative",

    '::after': {
        position: "absolute",
        bottom: 0,
        content: "''",
        width: "100%",
        height: 2,
        backgroundColor: _params.isScrolled ? theme.colors.tertiary[0] : theme.colors.secondary[0],
        transition: "0.15s ease-out",
        opacity: _params.isActive ? 1 : 0,
    },

    ':hover': {
        '::after': {
            transition: "0.15s ease-out",
            opacity: 1,
        }
    },
  },
}));

export function NavLink({isActive, isScrolled,...props}: AnchorProps) {

    const { classes } = useStyles({isActive, isScrolled});

    return(
        <Link className={classes.navLink} {...props}>
            <Text>{props.children}</Text>
        </Link>
    );
}