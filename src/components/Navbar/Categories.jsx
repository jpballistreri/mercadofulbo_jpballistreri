import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import itemsJson from "../../items.json";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [categoriesState, setCategoriesState] = useState([]);
  useEffect(() => {
    //Creando set de categorias
    let categories = new Set();
    itemsJson.map((item) =>
      item.categories.map((category) => categories.add(category))
    );
    setCategoriesState([...categories]);
  }, []);

  return (
    <>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Categories
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {categoriesState.map((category) => (
          <Link
            to={`/category/${category}`}
            style={{
              textDecoration: "none",
              color: "gray",
            }}
          >
            <MenuItem
              onClick={handleClose}
              style={{ textTransform: "capitalize" }}
            >
              {category}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
}
