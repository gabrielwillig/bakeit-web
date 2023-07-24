import {
  Button,
  createStyles,
  Divider,
  Flex,
  Grid,
  Stack,
} from "@mantine/core";
import { Box, Text } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";

import partners from "@/assets/partners-bakeit.jpg";
import redIcon from "@/assets/icon-bakeit-red.png";
import {
  ADDRESS,
  bakeItSocials,
  MAPS_ADDRESS_URL,
  MAPS_IFRAME_URL,
} from "@/utils/constants";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { LogoDivider } from "@/components/Divider";

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

export default function ABakeIt() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Bake It | A Bake It</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Grid columns={11} className={classes.grid} gutter="sm" mt={16} mb={16}>
        <Grid.Col span={5} className={classes.gridCol}>
          <Box
            w="100%"
            h="auto"
            sx={{ position: "relative", aspectRatio: "763 / 1024" }}
          >
            <Image src={partners} alt="Foto Sócios" fill={true} />
          </Box>
        </Grid.Col>
        <Grid.Col span={5} className={classes.gridCol} offset={1}>
          <Stack align="center" sx={{ gap: 16 }}>
            <Box
              w="64px"
              h="auto"
              sx={{ position: "relative", aspectRatio: "1" }}
            >
              <Image src={redIcon} alt="Icon Vermelho" fill={true} />
            </Box>
            <Text ff="Mermaid" c="black" fz={30} fw={700}>
              QUEM SOMOS
            </Text>
            <Text component="p" ff="Chaparral" c="#404040" fz={20} ta="justify" sx={{textIndent: "24px"}}>
              Criada em 2014 na cidade de Matinhos, litoral do Paraná, com o
              nome original Hangry Grrrls pelas sócias Giulie Amaral e Clari
              Penha, a Bake It tem como objetivo central mostrar ao público que
              a culinaria vegana, pode ser deliciosa e surpreendente, mesmo sem
              possuir ingredientes de origem animal. Somos especializados em
              releituras da confeitaria tradicional, oferecendo opções veganas
              de qualidade, buscando agradar todos os paladares, sendo um
              diferencial que nos destaca no mercado. Nossa produção é toda
              feita de forma artesanal com ingredientes de qualidade. Produzimos
              nosso próprio leite condensado, creme de leite e doce de leite a
              partir da castanha de caju, também produzimos “queijos” e “carnes”
              vegetais, sendo os destaques das nossas opções salgadas. Buscamos
              a excelência dentro da área em que atuamos e todos os detalhes são
              importantes para nós, desde a criação das receitas até o
              atendimento ao cliente. Atualmente não possuímos espaço físico
              para receber os clientes, mas realizamos encomendas e eventos.
            </Text>
            <Button className={classes.orderButton} color="red">
              Faça sua encomenda
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
      <LogoDivider />
      <Grid columns={12} className={classes.grid} gutter="xl" align="center" mb={32}>
        <Grid.Col span={5}>
          <Text ff="Mermaid" c="black" ta="center" fz={30} fw={700}>
            ONDE NOS ENCONTRAR
          </Text>
          <Text mt={16} ff="Chaparral" c="#404040" fz={20} ta="justify" sx={{textIndent: "24px"}}>
            Possuímos um espaço físico disponível para a retirada das
            encomendas, localizado ao lado do portal de Santa Felicidade. Também
            é possível optar pelo método de delivery em que levaremos sua
            encomenda diretamente a você. Atualmente não possuímos atendimento
            no balcão, apenas atuando nos regimes de delivery e take-away.
          </Text>
        </Grid.Col>
        <Grid.Col span={6} offset={1}>
          <Grid columns={2} align="center">
            <Grid.Col span={1}>
              <iframe
                title="Onde Retirar os Produtos"
                src={MAPS_IFRAME_URL}
                width="100%"
                height="auto"
                style={{
                  border: "2px solid #AE2E2D",
                  borderRadius: 32,
                  aspectRatio: "1",
                }}
                allowFullScreen={false}
                aria-hidden="false"
                tabIndex={0}
              />
            </Grid.Col>
            <Grid.Col span={1}>
              <Grid
                columns={12}
                h="100%"
                p="15% 0"
                gutter="0"
                align="center"
                justify="center"
              >
                <Grid.Col span={2}>
                  <FaMapMarkerAlt color="#AE2E2D" size={32} />
                </Grid.Col>
                <Grid.Col span={10}>
                  <Link href={MAPS_ADDRESS_URL} target="_blank">
                    <Text
                      ff="Chaparral"
                      c="#404040"
                      fz={18}
                      fw={600}
                      ta="justify"
                      sx={{
                        ":hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {ADDRESS}
                    </Text>
                  </Link>
                </Grid.Col>
                <Grid.Col span={2}>
                  <FaPhoneAlt color="#AE2E2D" size={28} />
                </Grid.Col>
                <Grid.Col span={10}>
                  <Link href={bakeItSocials.PHONE_TO} target="_blank">
                    <Text
                      ff="Chaparral"
                      c="#404040"
                      fz={18}
                      fw={600}
                      ta="justify"
                      sx={{
                        ":hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {bakeItSocials.PHONE}
                    </Text>
                  </Link>
                </Grid.Col>
                <Grid.Col span={2}>
                  <MdOutlineEmail color="#AE2E2D" size={32} />
                </Grid.Col>
                <Grid.Col span={10}>
                  <Link href={bakeItSocials.EMAIL_TO} target="_blank">
                    <Text
                      ff="Chaparral"
                      c="#404040"
                      fz={18}
                      fw={600}
                      ta="justify"
                      sx={{
                        ":hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {bakeItSocials.EMAIL}
                    </Text>
                  </Link>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </>
  );
}
