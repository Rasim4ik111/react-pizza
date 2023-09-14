import React, { useState } from "react";
import "./scss/app.scss";

import { Header } from "./components/Header";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchValue, setSearchValue] = useState("");

  console.log(searchValue, "input changed");

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;