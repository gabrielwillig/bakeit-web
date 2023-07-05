import { Box, createStyles, Flex} from "@mantine/core";
import Image from "next/image";

import redLogo from "@/assets/logo-bakeit-red.png";
import whiteLogo from "@/assets/logo-bakeit-white.png";

import Link from "next/link";

import { useRouter } from "next/router";
import { NavLink } from "../NavLink";
import { routes } from "../../routes/routes";
import { useScrollListener } from "@/hooks/useScrollListener";

type HeaderProps = {
  isScrolled?: boolean;
};

const useStyles = createStyles((theme, _params: HeaderProps) => ({
  container: {
    zIndex: 99,

    position: "fixed",

    top: 0,
    left: 0,

    padding: "0 10%",

    width: "100%",
    height: "120px",

    alignItems: "center",
    justifyContent: "space-around",

    color: _params.isScrolled ? "white" : theme.colors.tertiary[0],

    borderBottom: _params.isScrolled ? "3px solid" +  theme.colors.tertiary[0] : "none",

    backgroundColor: _params.isScrolled ? theme.colors.secondary[0] : theme.colors.primary[0],

    transition: "0.2s ease",
  },
  logoContainer: {
    width: "180px",
    height: "auto",
  },
}));

export function DesktopMenu() {
  const router = useRouter();

  const isScrolled = useScrollListener(10);

  const { classes } = useStyles({ isScrolled });

  return (
    <Flex className={classes.container}>
      <Box className={classes.logoContainer}>
        <Link href="/">
          <Image src={isScrolled ? whiteLogo : redLogo} alt="Bake It Logo" width={180} />
        </Link>
      </Box>
      {routes.map((item, i) => (
        <NavLink
          href={item.route}
          key={item.label + i}
          isActive={item.route === router.pathname}
          isScrolled={isScrolled}
        >
          {item.label}
        </NavLink>
      ))}
    </Flex>
  );
}
