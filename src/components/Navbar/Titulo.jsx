import React from "react";
import { Box } from "@mui/system";
import Pelota from "../Pelota/Pelota";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Titulo({ responsiveMd }) {
  return (
    <>
      {responsiveMd === true ? (
        <Box sx={{ display: "flex", margin: "auto" }}>
          <Pelota />
          <Typography variant="h5" color="black" sx={{ margin: "auto" }}>
            mercado
          </Typography>
          <Typography
            variant="h5"
            color="primary.main"
            sx={{ fontWeight: 600, margin: "auto" }}
          >
            fulbo
          </Typography>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <Pelota classPelota="PelotaTitulo" />
          <Typography variant="h5" color="black" sx={{ margin: "auto" }}>
            mercado
          </Typography>
          <Typography
            variant="h5"
            color="primary.main"
            sx={{ fontWeight: 600, margin: "auto" }}
          >
            fulbo
          </Typography>
        </Box>
      )}
    </>
  );
}

export default Titulo;
