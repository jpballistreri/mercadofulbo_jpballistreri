import React from "react";
import { Box, Typography, Grid, Fade } from "@mui/material";
import { grey } from "@mui/material/colors";
import ItemCount from "../ItemCount/ItemCount";

export default function Item({ pictureUrl, title, description, price }) {
  const onAdd = (cantidadItems) => {
    alert(cantidadItems);
  };
  return (
    <Fade in={true}>
      <Grid item>
        <Box
          sx={{
            border: "2px solid" + grey[200],
            padding: "10px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        >
          <img
            src={pictureUrl}
            style={{ width: 300, height: 280 }}
            alt={{ title }}
          />
          <Typography variant="h5" color={grey[900]}>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
          <Typography variant="h6">${price}</Typography>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </Box>
      </Grid>
    </Fade>
  );
}
