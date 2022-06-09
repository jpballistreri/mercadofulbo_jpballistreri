import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerComp from "./Drawer";
import Titulo from "./Titulo";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const responsiveMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar>
        <Toolbar>
          {responsiveMd ? (
            <>
              <DrawerComp />
              <Titulo responsiveMd={true} />
            </>
          ) : (
            <>
              <Titulo responsiveMd={false} />
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Productos" />
                <Tab label="Ofertas" />
                <Tab label="Contacto" />
              </Tabs>
            </>
          )}
          <IconButton
            sx={{
              transform: "scale(1.5)",
              color: "white",
              "&:hover": { color: "#bdffcb" },
            }}
          >
            <ShoppingCartIcon sx={{ margin: "10px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
