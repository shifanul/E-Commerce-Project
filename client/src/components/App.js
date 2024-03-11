// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirmation from "./Confirmation";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import About from "./About";
import Services from "./Services";
import AllProducts from "./AllProducts";

const App = () => {
  // ALL THE DETAILS WE NEED FOR NAVIGATION!

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/confirmation/:orderId" element={<Confirmation />} />
        <Route path="/all-products/:productId" element={<ProductDetails />} />
        <Route path="/all-products" element={<AllProducts />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="" element={<h1>404: Oops!</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
