import { createTheme } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#029821",
    },
    secondary: {
      main: lightGreen[300],
    },
  },
  //typography: {
  //  fontFamily: ["Chilanka", "cursive"].join(","),
  //},
});

export default theme;
