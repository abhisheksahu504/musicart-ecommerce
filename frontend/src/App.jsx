// import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import SignUp from "./pages/SignUp";
const Layout = ({ children }) => {
  <div>
    <header>Header Content</header>
    <main>{children}</main>
    <footer>Footer content</footer>
  </div>;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
