import React, { useState } from "react";
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

const links = ["Productos", "Ofertas", "Contacto"];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>
                  <Typography variant="h6" color="primary">
                    {link}
                  </Typography>
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
          "&:hover": { color: "#ff6a00" },
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <AppsIcon
          sx={{
            margin: "10px",
          }}
        />
      </IconButton>
    </>
  );
};

export default DrawerComp;