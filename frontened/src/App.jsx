/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrder";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Verify } from "./pages/Verify";
import { ForgotPassword } from "./pages/ForgotPassword";
import CookieConsent from "./components/CookieConsent";
import './i18n'; // Import the i18n configuration

const App = () => {
  // const { i18n } = useTranslation();
  const [theme, setTheme] = useState(
    Cookies.get("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    Cookies.set("theme", theme, { expires: 365 });
  }, [theme]);

  // useEffect(() => {
  //   if (i18n && i18n.changeLanguage) {
  //     const userLang = Cookies.get("language") || navigator.language.split("-")[0] || "en";
  //     i18n.changeLanguage(userLang);
  //   }
  // }, [i18n]);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw]">
      <ToastContainer />
      <Navbar theme={theme} setTheme={setTheme} />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/about" element={<About />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;