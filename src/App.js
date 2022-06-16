import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />

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
