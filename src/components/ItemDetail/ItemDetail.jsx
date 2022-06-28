import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import ItemCount from "../ItemCount/ItemCount";
import CircleIcon from "@mui/icons-material/Circle";

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
      <Grid item xs={12} sm={6}>
        <Box
          component={"img"}
          src={pictureUrl}
          sx={{
            width: { xs: 300, sm: 450, md: 450, lg: 500 },
            paddingTop: { xs: 4, sm: 0 },
          }}
          alt={{ title }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Container>
          <Typography variant="h5" color={grey[900]}>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
          <Box textAlign="left">
            {moreInfo?.map((info, index) => (
              <Typography key={index} sx={{ display: "flex" }}>
                <CircleIcon
                  sx={{
                    color: "info.main",
                    fontSize: 20,
                  }}
                />
                {info}
              </Typography>
            ))}
          </Box>
          <Typography variant="h5">Price: ${price}</Typography>

          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </Container>
      </Grid>
    </Grid>
  );
}
