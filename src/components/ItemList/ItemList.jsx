import React, { useEffect, useState } from "react";
import productosJson from "./items.json";
import Item from "../Item/Item";
import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

function ItemList() {
  let itemsLoad;
  const [productos, setProductos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
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
  }, [itemsLoad]);

  return (
    <Grid container spacing={8} justifyContent="center">
      {loading && <Grid item>Loading...</Grid>}
      {error && "ERROR: No te quedes esperando porque."}
      {productos &&
        productos.map((producto) => {
          return (
            <Item
              id={producto.id}
              pictureUrl={producto.pictureUrl}
              title={producto.title}
              description={producto.description}
              price={producto.price}
            ></Item>
          );
        })}
    </Grid>
  );
}

export default ItemList;
