import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Welcome
          greeting={
            "MercadoFulbo, el mejor lugar para comprar camisetas de fútbol."
          }
        />
        <ItemListContainer />
        <Footer />
      </>
    </div>
  );
}

export default App;
