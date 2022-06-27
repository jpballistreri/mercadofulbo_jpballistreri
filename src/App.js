import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Welcome
                  greeting={
                    "All the FIFA World Cup Qatar 2022 jerseys at your doorstep! 🚀Free shipping anywhere in the world!🌎"
                  }
                />
                <ItemListContainer />
              </>
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
