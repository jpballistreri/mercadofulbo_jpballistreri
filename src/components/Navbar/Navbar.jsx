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
import { Link } from "react-router-dom";
import Categories from "./Categories";

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
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                }}
              >
                <Titulo responsiveMd={false} />
              </Link>
              <Tabs
                sx={{ marginLeft: "auto" }}
                TabIndicatorProps={{ style: { backgroundColor: "white" } }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Tab
                    label="Home"
                    sx={{
                      borderRadius: "2px",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                        color: "whitesmoke",
                      },
                    }}
                  />
                </Link>
              </Tabs>
              <Categories />
            </>
          )}

          <CartWidget sx={{ margin: "10px" }} />
        </Toolbar>
      </AppBar>
    </>
  );
}
