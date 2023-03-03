import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  colors: {
    primary: {
      100: "#F2656F",
      200: "#FCE0E2",
      300: "#F9B2B7",
      400: "#F6989F",
      500: "#F2656F",
      700: "#544E50",
      900: "#27959C",
    },
    secondary: {
      100: "#31BAC3",
    },
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    accent: "#3BDFEA",
    textFaint: "#ABABAB",
    accentGreen: "#31C36C",
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
