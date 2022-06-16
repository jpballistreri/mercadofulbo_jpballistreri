import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Camiseta from "../Camiseta/Camiseta";
import ItemCount from "../ItemCount/ItemCount";

const onAdd = (cantidadItems) => {
  alert(cantidadItems);
};

function ItemListContainer({ greeting }) {
  return (
    <>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      <Box
        sx={{
          bgcolor: "primary.dark",
          color: "whitesmoke",
          width: "100%",
          textAlign: "center",
          paddingY: "15px",
        }}
      >
        <Typography variant="h7">{greeting}</Typography>
      </Box>
      <Container
        sx={{
          width: "full",
          textAlign: "center",
          paddingBottom: "20px",
          paddingTop: "30px",
        }}
      >
        <Grid container spacing={8} justifyContent="center">
          <Camiseta
            url_image={"/camisetas/argentina_1998_99_titular.png"}
            team={"Argentina"}
            model={"1998 1999"}
            brand={"Adidas"}
            price={1500}
          />
          <Camiseta
            url_image={"/camisetas/uruguay_2021_2022_titular.png"}
            team={"Uruguay"}
            model={"2021_2022"}
            brand={"Puma"}
            price={900}
          />
          <Camiseta
            url_image={"/camisetas/brasil_1991_1993.png"}
            team={"Brasil"}
            model={"1991 1993"}
            brand={"Umbro"}
            price={1600}
          />
          <Camiseta
            url_image={"/camisetas/colombia_1998_01_titular.png"}
            team={"Colombia"}
            model={"1990 2001"}
            brand={"Reebok"}
            price={600}
          />
          <Camiseta
            url_image={"/camisetas/chile_2010_2011_titular.png"}
            team={"Chile"}
            model={"2010 2011"}
            brand={"Puma"}
            price={500}
          />
          <Camiseta
            url_image={"/camisetas/paraguay_2015_copa_america.png"}
            team={"Paraguay"}
            model={"2015 Copa America"}
            brand={"Adidas"}
            price={800}
          />
          <Camiseta
            url_image={"/camisetas/jamaica_2005_07.png"}
            team={"Jamaica"}
            model={"2005 2007"}
            brand={"Uhlsport"}
            price={900}
          />
          <Camiseta
            url_image={"/camisetas/mexico_2013.png"}
            team={"Mexico"}
            model={"2013"}
            brand={"Adidas"}
            price={1400}
          />
          <Camiseta
            url_image={"/camisetas/usa_1995_1998.png"}
            team={"Usa"}
            model={"1995 1998"}
            brand={"Nike"}
            price={900}
          />
        </Grid>
      </Container>
    </>
  );
}

export default ItemListContainer;
