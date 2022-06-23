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
            "All the FIFA World Cup Qatar 2022 jerseys at your doorstep! 🚀Free shipping anywhere in the world!🌎"
          }
        />
        <ItemListContainer />
        <Footer />
      </>
    </div>
  );
}

export default App;
