import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#444D4E",
      light: "#5F686A",
    },
    secondary: {
      main: "#F9A51A",
    },
    error: {
      main: "#991314",
    },
  },
  typography: {
    allVariants: {
      color: "#444D4E",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
export default theme;
