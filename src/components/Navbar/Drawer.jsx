import React, { useEffect, useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import itemsJson from "../../items.json";
import { Link } from "react-router-dom";

const links = ["Home"];

const DrawerComp = () => {
  const [categoriesState, setCategoriesState] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    //Creando set de categorias
    let categories = new Set();
    itemsJson.map((item) =>
      item.categories.map((category) => categories.add(category))
    );
    setCategoriesState([...categories]);
  }, []);

  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography variant="h6" color="primary">
                    Home
                  </Typography>
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          {categoriesState.map((link, index) => (
            <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>
                  <Link
                    to={`/category/${link}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="primary"
                      textTransform={"capitalize"}
                    >
                      {link}
                    </Typography>
                  </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{
          transform: "scale(1.6)",
          color: "#333",
          "&:hover": { color: "primary.main" },
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <AppsIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
