import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import ItemCount from "../ItemCount/ItemCount";

export default function Item({
  pictureUrl,
  title,
  description,
  price,
  moreInfo,
}) {
  const onAdd = (cantidadItems) => {
    alert(cantidadItems);
  };
  console.log(moreInfo);

  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} textAlign="center">
        <Box
          component={"img"}
          src={pictureUrl}
          sx={{ width: { xs: "100%", sm: 400, md: 450, lg: "100%" } }}
          alt={{ title }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" color={grey[900]}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="h6">Price: ${price}</Typography>
        <ul>
          {moreInfo?.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </Grid>
    </Grid>
  );
}
