import React, { useEffect, useState } from "react";
import productosJson from "./items.json";
import Item from "../Item/Item";
import { Grid } from "@mui/material";
import Pelota from "../Pelota/Pelota";

function ItemList() {
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
    <Grid container spacing={8} justifyContent="center">
      {loading && (
        <Grid item>
          <Pelota classPelota="PelotaCarga" />
        </Grid>
      )}
      {error && <Grid item>"ERROR: Intenta ingresar en unos minutos."</Grid>}
      {productos &&
        productos.map((producto) => {
          return (
            <Item
              key={producto.id}
              pictureUrl={producto.pictureUrl}
              title={producto.title}
              description={producto.description}
              price={producto.price}
            />
          );
        })}
    </Grid>
  );
}

export default ItemList;
