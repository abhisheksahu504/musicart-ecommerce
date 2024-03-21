import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
