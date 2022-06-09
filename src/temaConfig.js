import { createTheme } from "@mui/material";
import { green, lightGreen } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[600],
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
