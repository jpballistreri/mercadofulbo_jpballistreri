import Footer from "./components/Footer/Footer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const onAdd = (cantidadItems) => {
    alert(cantidadItems);
  };
  return (
    <div className="App">
      <>
        <Navbar />
        <ItemCount stock={10} onAdd={onAdd} />
        <ItemListContainer
          greeting={
            "MercadoFulbo, el mejor lugar para comprar camisetas de fútbol."
          }
        />

        <Footer />
      </>
    </div>
  );
}

export default App;
