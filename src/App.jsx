import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

import { business } from "./data/business.js";

export default function App() {
  return (
    <>
      <Navbar business={business} />
      <Routes>
        <Route path="/" element={<Home business={business} />} />
        <Route path="/menu" element={<Menu business={business} />} />
        <Route path="/gallery" element={<Gallery business={business} />} />
        <Route path="/about" element={<About business={business} />} />
        <Route path="/contact" element={<Contact business={business} />} />
      </Routes>
      <Footer business={business} />
    </>
  );
}
