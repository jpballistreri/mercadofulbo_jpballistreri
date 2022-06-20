import React from "react";
import vectorPelota from "./pelota.svg";
import "./pelota.css";
import { Typography } from "@mui/material";

function Pelota({ classPelota = "PelotaTitulo" }) {
  switch (classPelota) {
    case "PelotaCarga":
      return (
        <>
          <Typography>Loading...</Typography>
          <img src={vectorPelota} className="PelotaCarga" alt="logo" />
        </>
      );
    default:
      return (
        <>
          <img src={vectorPelota} className="PelotaTitulo" alt="logo" />
        </>
      );
  }
}

export default Pelota;
