import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#9545ff",
    200: "#6f14e6",
    300: "#6212cc",
    400: "#560fb3",
    500: "#4a0d99",
    600: "#3e0b80",
    700: "#310966",
    800: "#25074c",
    900: "#190433"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;
