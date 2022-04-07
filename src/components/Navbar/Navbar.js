import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Сергеевские рецепты</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Создать Рецепт</Link>
      </nav>
    </div>
  );
};

export default Navbar;
