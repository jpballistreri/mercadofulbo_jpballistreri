import React from "react";
import { styled } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { myCartContext } from "../CartContext";
import BadgeUnstyled, { badgeUnstyledClasses } from "@mui/base/BadgeUnstyled";
import { useContext } from "react";
import { Link } from "react-router-dom";

const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 12px;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 0;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    width: 14px;
    height: 17px;
    padding: 0 2px;
    color: #fff;
    font-weight: 600;
    font-size: 9px;
    line-height: 18px;
    white-space: nowrap;
    text-align: center;
    background: red;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  & .${badgeUnstyledClasses.invisible} {
    opacity: 0;
    pointer-events: none;
  }
`;

function CartWidget() {
  const { getCartTotalQuantity } = useContext(myCartContext);

  return (
    <Link to={"/cart"}>
      <IconButton
        sx={{
          transform: "scale(1.6)",
          color: "#333",
          "&:hover": { color: "primary.main" },
        }}
      >
        <StyledBadge badgeContent={getCartTotalQuantity()}>
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}

export default CartWidget;
