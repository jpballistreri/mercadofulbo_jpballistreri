import React from "react";
import { Box, Typography } from "@mui/material";
import remeras_banner from "./remeras.jpg";

function Welcome({ greeting }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${remeras_banner})`,
        width: "100%",
        height: "200px",
        textAlign: "center",
        paddingY: "15px",
        color: "whitesmoke",
        backgroundSize: "cover",
      }}
    >
      <Typography variant="h4">{greeting}</Typography>
    </Box>
  );
}

export default Welcome;
