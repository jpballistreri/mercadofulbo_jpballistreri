import React from "react";
import { createContext, useState } from "react";

export const myCartContext = createContext(null);

export default function CartContext({ children }) {
  //const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(item, quantity) {
    const itemFound = cartItems.find((element) => element.id === item.id);
    //Si encuentra el item en el cart, suma quantity, si no, le agrega quantity al item del prop
    itemFound ? (itemFound.quantity += quantity) : (item.quantity = quantity);
    //Si encuentra el item en el carrito, agrega el itemFound con la suma de quantity
    if (itemFound) {
      setCartItems(
        cartItems.map((element) =>
          element.id === itemFound.id ? itemFound : item
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }

    console.log(item);
    console.log(cartItems);
  }
  function removeItem(itemId) {
    // Remover un item del cart por usando su id
  }
  function clear() {
    //setCart([])
    // Remover todos los items
  }
  const isInCart = (id) => {
    //return i | -1;
  };

  return (
    <>
      <myCartContext.Provider value={{ addItemToCart }}>
        {children}
      </myCartContext.Provider>
    </>
  );
}
