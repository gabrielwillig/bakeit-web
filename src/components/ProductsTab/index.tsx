import { createStyles, Tabs, Text } from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  tab: {
    ":hover": {
      backgroundColor: "transparent",
      border: "none",
    },
    marginBottom: "20px",
    border: "none",
    // "&[data-active]": {
    //     borderColor: "#AE2E2D",
    // }
  },
  tabLabel: {
    fontSize: "20px",
    color: "#404040",
    ":hover": {
      color: "#AE2E2D",
      fontWeight: "bold",
    },
    "&[data-active]": {
      color: "#AE2E2D",
    },
  },
}));

export function ProductsTabs() {
  const { classes } = useStyles();

  return (
    <Tabs
      defaultValue="naked-cakes"
      classNames={{ tab: classes.tab, tabLabel: classes.tabLabel }}
    >
      <Tabs.List>
        <Tabs.Tab value="naked-cakes">Naked Cakes</Tabs.Tab>
        <Tabs.Tab value="bakeit-cream">Bolos BakeItCream</Tabs.Tab>
        <Tabs.Tab value="artistic-cakes">Bolos Artísticos</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="naked-cakes" pt="md">
        
      </Tabs.Panel>
    </Tabs>
  );
}
