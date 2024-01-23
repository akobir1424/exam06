import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CreateProduct from "./pages/create/CreateProduct.jsx";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Update from "./pages/Update.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="create" element={<CreateProduct />} />
          <Route path="edit/:id" element={<Update />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
