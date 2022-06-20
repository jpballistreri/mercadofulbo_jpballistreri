import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const onAdd = (cantidadItems) => {
  alert(cantidadItems);
};

function ItemListContainer({ greeting }) {
  return (
    <>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      <Box
        sx={{
          bgcolor: "primary.dark",
          color: "whitesmoke",
          width: "100%",
          textAlign: "center",
          paddingY: "15px",
        }}
      >
        <Typography variant="h7">{greeting}</Typography>
      </Box>
      <Container
        sx={{
          width: "full",
          textAlign: "center",
          paddingBottom: "20px",
          paddingTop: "30px",
        }}
      >
        <ItemList />
      </Container>
    </>
  );
}

export default ItemListContainer;
