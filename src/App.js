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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="all-ads" element={<AllAds />} />
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

export default App;
