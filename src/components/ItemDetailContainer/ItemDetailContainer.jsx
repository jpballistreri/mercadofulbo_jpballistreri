import React, { useEffect, useState } from "react";
import productosJson from "../../items.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Grid } from "@mui/material";
import Pelota from "../Pelota/Pelota";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [itemState, setItemState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const itemsLoad = new Promise((res, rej) => {
      setTimeout(() => {
        let itemRes = productosJson.find((item) => item.id === id);

        itemRes ? res(itemRes) : rej("No existe el producto");
      }, 500);
    });
    itemsLoad
      .then((res) => {
        setItemState(res);
      })
      .catch((err) => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <Container
      sx={{
        textAlign: { xs: "center", sm: "left" },
        paddingBottom: "20px",
      }}
    >
      {loading && (
        <Grid container spacing={1} justifyContent="center">
          <Grid item justifyContent="center">
            <Pelota classPelota="PelotaCarga" />
          </Grid>
        </Grid>
      )}
      {error && (
        <Grid container spacing={1} justifyContent="center">
          <Grid item>ERROR: Producto {id} no encontrado.</Grid>
        </Grid>
      )}
      {itemState && <ItemDetail key={itemState.id} item={itemState} />}
    </Container>
  );
}

export default ItemDetailContainer;
