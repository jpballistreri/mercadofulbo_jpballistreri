import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemDetail/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Welcome
          greeting={
            "Todas las camisetas de FIFA World Cup Qatar 2022 en la puerta de tu casa! 🚀Envíos gratis a cualquier parte del mundo!🌎"
          }
        />
        <ItemListContainer />
        <Footer />
      </>
    </div>
  );
}

export default App;
