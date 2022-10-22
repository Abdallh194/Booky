import TopMenu from "./components/TopMenu/TopMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckOut/Checkout";
import Contact from "./components/Contact/Contact";
import Stories from "./components/Stories/Stories";
import Log from "./components/Log/Log";

function App() {
  return (
    <BrowserRouter>
      <TopMenu />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Shop" element={<Shop />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Stories" element={<Stories />} />
        <Route exact path="/Log" element={<Log />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
