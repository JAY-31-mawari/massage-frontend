import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/css/styles.css";
import "./assets/css/colors.css";
import "./config.ts";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // <-- import

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <div id="main-wrapper">
      <App />
      <Toaster position="top-center" reverseOrder={false} toastOptions={{ style: { fontSize: '22px', textAlign: 'center' } }} />
    </div>
  </BrowserRouter>
);

reportWebVitals();
