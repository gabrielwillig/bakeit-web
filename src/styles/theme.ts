import { MantineThemeOverride } from "@mantine/core";
import { fonts } from "./fonts/fonts";

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',

  fontFamily: fonts.poppins,

  colors: {
    primary: ['#E8E7DE'], //Pastel White
    secondary: ['#AE2E2D'], //Red
    tertiary: ['#5F5C5E'], // Gray
    support: ['#363636'] //Secondary Gray
  },

  breakpoints: {
    xs: '24em'
  },

  globalStyles: ((theme) => ({
    '*': {
      padding: 0,
      margin: 0,

      boxSizing: 'border-box',
    },

    'html, body, #__next': {
      minWidth: '100%',
      minHeight: '100%',

      height: '100%',

      scrollBehavior: 'smooth',
    },

    'a': {
        textDecoration: "none",
    },

    body: {
      background: theme.colors.primary[0],

      overflowY: 'scroll',

      '&::-webkit-scrollbar': {
        width: '0.375rem',
        background: theme.colors.primary[0]
      },
    
      '&::-webkit-scrollbar-thumb': {
        background: theme.colors.tertiary[0],
        borderRadius: 999
      }
    }
  })) 
}