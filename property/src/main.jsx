import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import "./index.css";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext.jsx";
import { PropertyProvider } from "./context/PropertyContext.jsx";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PropertyProvider>
        <BrowserRouter>
          <NextUIProvider>
            <Toaster position="top-right" />
            <App />
          </NextUIProvider>
        </BrowserRouter>
      </PropertyProvider>
    </AuthProvider>
  </React.StrictMode>
);
