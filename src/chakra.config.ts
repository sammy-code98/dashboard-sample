import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  colors: {
    primary: {
      100: "#52b6ff",
      200: "#a6c8ff",
      300: "#68bfff",
      400: "#7dc8ff",
      500: "#27A4FF",
      700: "#544E50",
      900: "#3dadff",
    },
    secondary: {
      100: "#31BAC3",
    },
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    accent: "#a6c8ff",
    textFaint: "#ABABAB",
    accentGreen: "#d4edff",
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        // borderRadius: '0px'
      },
    },
  },
});
export default theme;
