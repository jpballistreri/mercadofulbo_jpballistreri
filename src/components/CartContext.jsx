import React from "react";
import { createContext, useState } from "react";

export const myCartContext = createContext(null);

export default function CartContext({ children }) {
  //const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(item, quantity) {
    //Busca el item en el cart
    const itemFound = cartItems.find((element) => element.id === item.id);
    //Si lo encuentra, agrega el item con la suma de quantity del item encontrado
    if (itemFound) {
      itemFound.quantity += quantity;
      setCartItems(
        cartItems.map((element) =>
          element.id === itemFound.id ? itemFound : item
        )
      );
      //Si no lo encuentra agrega el item con su primer quantity
    } else {
      item.quantity = quantity;
      setCartItems([...cartItems, item]);
    }
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
