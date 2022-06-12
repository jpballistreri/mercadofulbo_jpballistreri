import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import btc from "./btc.png";

export default function Camiseta({ url_image, team, model, brand, price }) {
  return (
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
          src={url_image}
          style={{ width: 300, height: 280 }}
          alt={{ team }}
        />
        <Typography variant="h5" color={grey[900]}>
          {team}
        </Typography>
        <Typography variant="body2">{model}</Typography>
        <Typography variant="body1">{brand}</Typography>
        <Typography variant="h6">${price}</Typography>
      </Box>
    </Grid>
  );
}
