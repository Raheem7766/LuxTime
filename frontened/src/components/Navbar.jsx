import { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
// import { useTranslation } from "react-i18next";
import Cookies from "js-cookie"; // Import js-cookie

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  // const [langDropdown, setLangDropdown] = useState(false);
  // const [selectedLang, setSelectedLang] = useState("EN"); // Default language
  const [theme, setTheme] = useState(Cookies.get("theme") || "light"); // Get theme from cookies or default to "light"

  const {
    setShowSearch,
    searchVisible,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  // const { t, i18n } = useTranslation("common");

  // Apply the theme to the document on initial load
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Toggle light/dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    Cookies.set("theme", newTheme, { expires: 365 }); // Save theme in cookies
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
    setCartItems({});
  };

  // const changeLanguage = (lang, e) => {
  //   e.preventDefault(); // Prevent default behavior (if needed)
  //   setSelectedLang(lang);
  //   setLangDropdown(false);
  //   i18n.changeLanguage(lang.toLowerCase()); // Change the language using i18next
  //   Cookies.set("language", lang, { expires: 365 }); // Save language preference in cookies
  // };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-gray-700 text-lg">
        <NavLink className="flex flex-col items-center gap-1" to="/">
          <p>{"home"}</p>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/collection">
          <p>{"collection"}</p>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/about">
          <p>{"about"}</p>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/contact">
          <p>{"contact"}</p>
        </NavLink>
        <NavLink
          className="flex flex-col items-center gap-1"
          to="../../../admin/src/components/Login.jsx"
          target="_blank"
        >
          {/* <p className="px-2 rounded-md text-gray-700 border bg-slate-300">
            {t("adminPanel")}
          </p> */}
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        {/* Light/Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-slate-400 transition-colors flex items-center justify-center"
        >
          {theme === "light" ? (
            // Black Moon Icon for Light Mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="20"
              height="20"
            >
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z" />
            </svg>
          ) : (
            // White Sun Icon for Dark Mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="20"
              height="20"
            >
              <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
            </svg>
          )}
        </button>

        {searchVisible && (
          <img
            src={assets.search_icon}
            alt="Search Icon"
            className="w-5 cursor-pointer"
            onClick={() => setShowSearch(true)}
          />
        )}

        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="Profile Icon"
            className="w-5 cursor-pointer"
            onClick={() => (token ? null : navigate("/login"))}
          />
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">
                  {"myProfile"}
                </p>
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => navigate("/orders")}
                >
                  {"orders"}
                </p>
                <p className="cursor-pointer hover:text-black" onClick={logout}>
                  {"logout"}
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="Cart Icon" className="w-5 minw-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Language Dropdown (Smaller and Responsive) */}
        {/* <div className="relative">
          <button
            onClick={() => setLangDropdown(!langDropdown)}
            className="flex items-center gap-1 px-2 py-1 border rounded-md text-gray-700 cursor-pointer text-sm"
          >
          {selectedLang} ▾
          </button>
          {langDropdown && (
          <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-lg z-50">
          <button
            className="cursor-pointer hover:bg-gray-200 p-2 text-sm w-full text-left"
            onClick={(e) => changeLanguage("EN", e)}
          >
          🇺🇸 English
          </button>
          <button
            className="cursor-pointer hover:bg-gray-200 p-2 text-sm w-full text-left"
            onClick={(e) => changeLanguage("FR", e)}
          >
          🇫🇷 Français
          </button>
          <button
            className="cursor-pointer hover:bg-gray-200 p-2 text-sm w-full text-left"
            onClick={(e) => changeLanguage("AR", e)}
          >
          🇸🇦 العربية
          </button>
        </div>
        )}
      </div> */}

        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Side bar hamburger menu for smaller screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
              className="h-4 rotate-180"
            />
            <p>{"back"}</p>
          </div>
          <NavLink
            className="py-4 pl-6 border"
            onClick={() => setVisible(false)}
            to="/"
          >
            <p>{"home"}</p>
          </NavLink>
          <NavLink
            className="py-4 pl-6 border"
            onClick={() => setVisible(false)}
            to="/collection"
          >
            <p>{"collection"}</p>
          </NavLink>
          <NavLink
            className="py-4 pl-6 border"
            onClick={() => setVisible(false)}
            to="/about"
          >
            <p>{"about"}</p>
          </NavLink>
          <NavLink
            className="py-4 pl-6 border"
            onClick={() => setVisible(false)}
            to="/contact"
          >
            <p>{"contact"}</p>
          </NavLink>
          <NavLink
            className="py-4 pl-6 border"
            onClick={() => setVisible(false)}
            to="../../../admin/src/components/Login.jsx"
            target="_blank"
          >
            <p>{"adminPanel"}</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;