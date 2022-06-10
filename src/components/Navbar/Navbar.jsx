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

export default function Header() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const responsiveMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar style={{ background: "white" }}>
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
                    "&:hover": { backgroundColor: "#1bfb001c" },
                  }}
                />
                <Tab
                  label="Ofertas"
                  sx={{
                    borderRadius: "50px",
                    color: "#333",
                    "&:hover": { backgroundColor: "#1bfb001c" },
                  }}
                />
                <Tab
                  label="Contacto"
                  sx={{
                    borderRadius: "50px",
                    color: "#333",
                    "&:hover": { backgroundColor: "#1bfb001c" },
                  }}
                />
              </Tabs>
            </>
          )}
          <IconButton
            sx={{
              transform: "scale(1.5)",
              color: "#333",
              "&:hover": { color: "#ff6a00" },
            }}
          >
            <ShoppingCartIcon sx={{ margin: "10px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
