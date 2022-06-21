import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ItemCount({ stock, initial, onAdd }) {
  const [itemsState, setItemsState] = useState(stock === 0 ? 0 : initial);

  const agregarItem = () => {
    if (stock > 0 && itemsState < stock) {
      setItemsState(itemsState + 1);
    }
  };

  const eliminarItem = () => {
    if (itemsState > 0) {
      setItemsState(itemsState - 1);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "165px",
          borderRadius: "5px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            width: "full",
            textAlign: "center",
            fontWeight: "regular",
            lineHeight: 1.2,
          }}
        ></Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Button
            sx={{
              borderRadius: "50px",
            }}
            onClick={() => {
              eliminarItem();
            }}
          >
            <RemoveCircleIcon
              sx={{ color: "error.main", fontSize: 30, cursor: "pointer" }}
            />
          </Button>
          <Typography sx={{ fontSize: 20, margin: "auto" }}>
            {itemsState}
          </Typography>
          <Button
            sx={{
              borderRadius: "50px",
            }}
            onClick={() => {
              agregarItem();
            }}
          >
            <AddCircleIcon
              sx={{
                color: "success.light",
                fontSize: 30,
                cursor: "pointer",
                width: "full",
              }}
            />
          </Button>
        </Box>
        <Button
          sx={{ borderRadius: "10px" }}
          variant="outlined"
          color="success"
          size="small"
          onClick={() => {
            onAdd(itemsState);
          }}
        >
          <AddShoppingCartIcon /> Agregar al carrito
        </Button>
      </Box>
    </>
  );
}

export default ItemCount;
