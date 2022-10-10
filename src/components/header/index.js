import React from "react";
import "../../styles/header/index.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <Link to="/">
    <div className="title-header-container">
        <img
          src="https://i.ibb.co/XbZdjcY/Logo-Swearch-removebg-preview.png"
          alt="Logo-Swearch-removebg-preview"
          border="0"
        />
    </div>
    </Link>
  );
};
