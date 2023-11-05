import React from "react";
import ReactDOM from "react-dom/client";
import LayoutProvider from "./layout/LayoutProvider";
import "./styles/reset.css";
import "./styles/global.css";
import RouteProvider from "./routes";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutProvider>
        <RouteProvider />
      </LayoutProvider>
    </BrowserRouter>
  </React.StrictMode>
);
