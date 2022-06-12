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
import DrawerComp from "./Drawer";
import Titulo from "./Titulo";
import CartWidget from "./CartWidget";

export default function Header() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const responsiveMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="static"
        variant="dense"
        style={{ background: "white", padding: "10px 15px 5px 15px" }}
      >
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
                <Tab
                  label="Productos"
                  sx={{
                    borderRadius: "50px",
                    color: "#333",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      color: "whitesmoke",
                    },
                  }}
                />
                <Tab
                  label="Ofertas"
                  sx={{
                    borderRadius: "50px",
                    color: "#333",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      color: "whitesmoke",
                    },
                  }}
                />
                <Tab
                  label="Contacto"
                  sx={{
                    borderRadius: "50px",
                    color: "#333",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      color: "whitesmoke",
                    },
                  }}
                />
              </Tabs>
            </>
          )}

          <CartWidget sx={{ margin: "10px" }} cartProducts={100} />
        </Toolbar>
      </AppBar>
    </>
  );
}
