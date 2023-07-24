import { Box, createStyles, Divider, Flex, Grid } from "@mantine/core";
import Image from "next/image";
import redIcon from "@/assets/icon-bakeit-red.png";

const useStyles = createStyles((theme) => ({
    grid: {
        width: "100%",
        height: "auto",
        padding: "3% 10%",
      },
}));

export function LogoDivider () {

    const { classes } = useStyles();

    return(
        <Grid columns={7} className={classes.grid} align="center">
        <Grid.Col span={3}>
          <Divider size="md" color="#FEFEFE" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Flex align="center" justify="center">
            <Box
              w="96px"
              h="auto"
              sx={{
                position: "relative",
                aspectRatio: "1",
                justifySelf: "center",
              }}
            >
              <Image src={redIcon} alt="Icon Vermelho" fill={true} />
            </Box>
          </Flex>
        </Grid.Col>
        <Grid.Col span={3}>
          <Divider size="md" color="#FEFEFE" />
        </Grid.Col>
      </Grid>
    );
};