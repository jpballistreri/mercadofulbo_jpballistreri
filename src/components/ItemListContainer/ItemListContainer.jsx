import React from "react";
import { Container } from "@mui/material";
import ItemList from "./ItemList";

function ItemListContainer() {
  return (
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
  );
}

export default ItemListContainer;
