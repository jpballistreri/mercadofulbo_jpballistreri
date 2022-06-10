import React from "react";
import { styled } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

import BadgeUnstyled, { badgeUnstyledClasses } from "@mui/base/BadgeUnstyled";

const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 10px;
    height: 20px;
    padding: 0 5px;
    color: #fff;
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
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

function CartWidget({ cartProducts = 1 }) {
  return (
    <IconButton
      sx={{
        transform: "scale(1.6)",
        color: "#333",
        "&:hover": { color: "#ff6a00" },
      }}
    >
      <StyledBadge badgeContent={cartProducts}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

export default CartWidget;
