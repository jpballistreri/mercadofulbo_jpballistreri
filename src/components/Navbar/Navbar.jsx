import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import Titulo from "./Titulo";
import CartWidget from "../CartWidget/CartWidget";

export default function Header() {
  const [value, setValue] = useState(0);
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
                  label="Home"
                  sx={{
                    borderRadius: "2px",
                    color: "#333",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      color: "whitesmoke",
                    },
                  }}
                />
                <Tab
                  label="Hot Sale"
                  sx={{
                    borderRadius: "2px",
                    color: "#333",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      color: "whitesmoke",
                    },
                  }}
                />
                <Tab
                  label="About"
                  sx={{
                    borderRadius: "2px",
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
