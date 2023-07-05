import {
  BackgroundImage,
  Box,
  createStyles,
  Flex,
  Grid,
  List,
  Stack,
  Text,
} from "@mantine/core";

import Image from "next/image";
import Link from "next/link";

import whiteLogo from "@/assets/logo-bakeit-white.png";
import background from "@/assets/background-footer.jpg";

import {
  FaBook,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { routes } from "@/routes/routes";
import {
  bakeItSocials,
  MAPS_ADDRESS_URL,
  MAPS_IFRAME_URL,
  WILLIG_GITHUB,
} from "@/utils/constants";

const useStyles = createStyles((theme) => ({
  grid: {
    margin: 0,

    position: "relative",

    width: "100%",
    height: "300px",

  },
  logoContainer: {
    width: "180px",
    height: "auto",
  },
  leftCol: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",

    gap: "48px",
  },
  rightCol: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",

    gap: "48px",
  },
  socials: {
    width: "100%",

    gap: "48px",

    justifyContent: "center",

    color: "white",
  },
  text: {
    color: "white",
    fontWeight: 700,
    fontSize: 22,
  },
  link: {
    color: "white",
    fontWeight: 700,
    fontSize: 16,

    ":hover": {
      borderBottom: "2px solid white",
    },
  },
  developedBy: {
    color: "white",
    fontWeight: 700,
    fontSize: 16,
    position: "absolute",
    bottom: 4,
    right: 18,

    ":hover": {
      borderBottom: "2px solid white",
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();
  return (
    <BackgroundImage src={background.src} bottom="0">
      <Grid columns={3} gutter="xl" className={classes.grid}>
        <Grid.Col span={1} className={classes.leftCol}>
          <Box className={classes.logoContainer}>
            <Link href="/">
              <Image src={whiteLogo} alt="Bake It Logo" layout="responsive" />
            </Link>
          </Box>
          <Flex className={classes.socials}>
            <Link href={bakeItSocials.FACEBOOK} target="_blank">
              <FaFacebookSquare size={34} color="white" />
            </Link>
            <Link href={bakeItSocials.INSTAGRAM} target="_blank">
              <FaInstagram size={34} color="white" />
            </Link>
          </Flex>
        </Grid.Col>
        <Grid.Col span={1} className={classes.leftCol}>
          <Flex gap="sm" align="center">
            <iframe
              title="Onde Retirar os Produtos"
              src={MAPS_IFRAME_URL}
              width={16 * 12}
              height={16 * 12}
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            />
            <Stack w={20 * 12} justify="space-between" sx={{ gap: "4px" }}>
              <Text className={classes.text}>FALE CONOSCO</Text>
              <Link href={MAPS_ADDRESS_URL} target="_blank">
                <Text className={classes.link}>
                  Av. Manoel Ribas, 2658 - Santa Felicidade, Curitiba - PR,
                  80810-345
                </Text>
              </Link>
              <Link href={bakeItSocials.EMAIL_TO} target="_blank">
                <Flex align="center" gap="xs">
                  <MdOutlineEmail size={32} color="white" />
                  <Text className={classes.link}>{bakeItSocials.EMAIL}</Text>
                </Flex>
              </Link>
              <Link href={bakeItSocials.PHONE_TO} data-rel="external">
                <Flex align="center" gap="xs">
                  <FaPhoneSquareAlt size={32} color="white" />
                  <Text className={classes.link}>{bakeItSocials.PHONE}</Text>
                </Flex>
              </Link>
            </Stack>
          </Flex>
        </Grid.Col>
        <Grid.Col span={1} className={classes.rightCol}>
          <Stack>
            <Flex gap="xs">
              <FaBook size={34} color="white" />
              <Text className={classes.text}>PÁGINAS</Text>
            </Flex>
            <List withPadding>
              {routes.map((item, i) => (
                <List.Item>
                  <Link
                    className={classes.link}
                    href={item.route}
                    key={item.label + i}
                  >
                    {item.label}
                  </Link>
                </List.Item>
              ))}
            </List>
          </Stack>
          <Link href={WILLIG_GITHUB} className={classes.developedBy}>
            <Flex gap="xs" align="center">
              <Text>
                Desenvolvido por Gabriel Willig
              </Text>
              <FaGithub size={24} color="white"/>
            </Flex>
          </Link>
        </Grid.Col>
      </Grid>
    </BackgroundImage>
  );
}
