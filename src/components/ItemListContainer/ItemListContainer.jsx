import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import ItemList from "../ItemList/ItemList";
import productosJson from "../../items.json";
import { Grid } from "@mui/material";
import Pelota from "../Pelota/Pelota";

function ItemListContainer() {
  const [productos, setProductos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let itemsLoad;
    itemsLoad = new Promise((res, rej) => {
      setTimeout(() => {
        if (productosJson.length > 0) {
          res(productosJson);
        } else {
          rej("No hay productos");
        }
      }, 2000);
    });

    itemsLoad
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container
      sx={{
        width: "full",
        textAlign: "center",
        paddingBottom: "20px",
        paddingTop: "30px",
      }}
    >
      {loading && (
        <Grid item>
          <Pelota classPelota="PelotaCarga" />
        </Grid>
      )}
      {error && <Grid item>"ERROR: Intenta ingresar en unos minutos."</Grid>}
      {productos && <ItemList productos={productos} />}
    </Container>
  );
}

export default ItemListContainer;
