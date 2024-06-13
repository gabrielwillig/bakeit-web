import cake from '@/assets/cake2-bakeit.jpg';
import { LogoDivider } from '@/components/Divider';
import { ProductsTabs } from '@/components/ProductsTab';
import { Box, createStyles, Flex, Stack, Text } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: "auto",
    padding: "8% 15% 0%",
    gap: "10%",
    alignItems: "center",
  },
  tab: {
    fontSize: "20px",
    fontColor: "#404040",
  },
  textContainer: {
    height: "100%",

    gap: "1.5rem",

    flex: 1,

    color: "#404040",
    fontFamily: "Chaparral",
    fontSize: 20,
  },
}));

export default function Cardapio() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Bake It | Produtos</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Stack align="center">
        <LogoDivider />
        <Text ff="Mermaid" c="black" fz={30} fw={700}>
          NOSSOS PRODUTOS
        </Text>
        <Flex className={classes.container}>
          <Box
            w="100%"
            h="auto"
            sx={{
              position: "relative",
              aspectRatio: "763 / 1024",
              boxShadow: "0 0 26px -4px rgba(0,0,0,0.63)",
              flex: 1,
            }}
          >
            <Image src={cake} alt="Foto Bolo Cereja" fill={true} />
          </Box>
          <Stack className={classes.textContainer}>
            <Text>
              Nossos produtos são elaborados com carinho e dedicação, desde a
              escolha de ingredientes de qualidade até a produção artesanal e
              cuidadosa, temos como objetivo proporcionar uma experiência única
              para nossos consumidores.
            </Text>
            <Text>
              A base da maioria de nossos produtos é a castanha de caju natural
              sem sal, essa oleaginosa tem um sabor suave que não deixa gosto
              residual nas receitas e proporciona uma textura incrível.
              Produzimos o leite de castanha de caju e a partir dele os outros
              preparos e por isso a palavra “Artesanal” é tão importante na
              nossa confeitaria. O leite condensado e o doce de leite são
              cozidos até atingir a textura ideal, transformando todos os
              produtos da Bake It em receitas exclusivas que carregam muito
              carinho e estudos.
            </Text>
          </Stack>
        </Flex>
        <LogoDivider />
        <Box w="100%">
          <ProductsTabs />
        </Box>
      </Stack>
    </>
  );
}
