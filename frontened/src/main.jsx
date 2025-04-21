import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContextProvider.jsx'
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import i18n setup

createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <ShopContextProvider >
        <App />
      </ShopContextProvider >
    </BrowserRouter>
  </I18nextProvider>
)
