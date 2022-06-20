import React from "react";
import { Box } from "@mui/system";
import pelota from "../../pelota.svg";
import { Typography } from "@mui/material";
import "./pelota.css";

function Titulo({ responsiveMd }) {
  return (
    <>
      {responsiveMd === true ? (
        <Box sx={{ display: "flex", margin: "auto" }}>
          <img src={pelota} className="PelotaTitulo" alt="logo" />
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
          <img src={pelota} className="PelotaTitulo" alt="logo" />
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
