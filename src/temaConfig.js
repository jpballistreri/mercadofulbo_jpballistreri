import { createTheme } from "@mui/material";
import { green, lightGreen } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: lightGreen[400],
    },
  },
});

export default theme;
