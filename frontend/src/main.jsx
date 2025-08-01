import React from 'react'
import {BrowserRouter} from "react-router"
import ReactDOM from "react-dom/client";
import App from "./App.jsx"
import {Toaster} from "react-hot-toast"
import './index.css' 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App/>
        <Toaster/>
      </BrowserRouter>
  </React.StrictMode>
);
