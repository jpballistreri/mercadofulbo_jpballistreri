import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Item({ pictureUrl, title, description, price }) {
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
          src={pictureUrl}
          style={{ width: 300, height: 280 }}
          alt={{ title }}
        />
        <Typography variant="h5" color={grey[900]}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>

        <Typography variant="h6">${price}</Typography>
      </Box>
    </Grid>
  );
}
