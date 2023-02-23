import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  AllAds,
  Categories,
  AboutUs,
  ContactUs,
  Error,
  Checkout,
} from "./pages";
import Layout from "./components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import getProducts from "./api/getProducts";
import withAppProvider from "./withAppProvider";

axios.defaults.baseURL = "https://wholiee.code7labs.com/";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.Product);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home products={products} />} />
          <Route path="all-ads" element={<AllAds products={products} />} />
          <Route path="categories" element={<Categories />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default withAppProvider(App);
