import React from "react";
import { myCartContext } from "../CartContext";
import { useContext } from "react";

function CartContainer() {
  const { cartItems } = useContext(myCartContext);
  console.log(cartItems);
  return <div>CartContainer</div>;
}

export default CartContainer;
