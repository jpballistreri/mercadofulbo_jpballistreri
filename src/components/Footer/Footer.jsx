import React from "react";
import { Box, Link } from "@mui/material";
import { width } from "@mui/system";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        color: "white",
        bottom: "0",
        width: "100%",
        textAlign: "right",
      }}
    >
      <Box sx={{ padding: "10px" }}>
        <Typography>
          Author:
          <Link
            href="https://github.com/jpballistreri/mercadofulbo_jpballistreri"
            color="inherit"
          >
            Juan Pablo Ballistreri
          </Link>
        </Typography>

        <Typography>©2022 MercadoFulbo</Typography>
      </Box>
    </Box>
  );
}
