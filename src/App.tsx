import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <ShoppingCartProvider>
      <Container className="mb-4">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
      <ShoppingCart />
    </ShoppingCartProvider>
  );
}

export default App;
