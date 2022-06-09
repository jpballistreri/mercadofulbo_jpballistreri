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
import MenuIcon from "@mui/icons-material/Menu";

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
        sx={{ transform: "scale(1.8)" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon
          sx={{
            color: "white",
            margin: "10px",
            "&:hover": { color: "#bdffcb" },
          }}
        />
      </IconButton>
    </>
  );
};

export default DrawerComp;
