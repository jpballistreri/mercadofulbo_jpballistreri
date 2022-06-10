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
          <img src={pelota} className="Pelota" alt="logo" />
          <Typography variant="h5" color="black">
            mercado
          </Typography>
          <Typography variant="h5" color="#ff6a00" sx={{ fontWeight: 600 }}>
            fulbo
          </Typography>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <img src={pelota} className="Pelota" alt="logo" />
          <Typography variant="h5" color="black">
            mercado
          </Typography>
          <Typography variant="h5" color="#ff6a00" sx={{ fontWeight: 600 }}>
            fulbo
          </Typography>
        </Box>
      )}
    </>
  );
}

export default Titulo;
