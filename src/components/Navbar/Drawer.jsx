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

const links = ["Home", "Hot Sale", "About"];

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
            <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
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
