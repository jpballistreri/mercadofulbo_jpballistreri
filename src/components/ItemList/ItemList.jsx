import Item from "../Item/Item";
import { Grid } from "@mui/material";

function ItemList({ productos }) {
  return (
    <Grid container spacing={8} justifyContent="center">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          pictureUrl={producto.pictureUrl}
          title={producto.title}
          description={producto.description}
          price={producto.price}
        />
      ))}
    </Grid>
  );
}

export default ItemList;