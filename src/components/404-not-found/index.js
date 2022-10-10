import React from "react";
import "../../styles/not-found/index.css";
import { Link } from "react-router-dom";
export const NotFound404 = () => {
  return (
    <section className="error-page">
      <p className="404">
        Sorry, we can't find that page, You'll find loads to explore on the home
        page
      </p>
      <Link to="/">
        <button className="button-404">Return to home</button>
      </Link>
      <img
        className="rotation"
        src="https://i.ibb.co/02LsQ1R/yoda404.png"
        alt="yoda404"
        border="0"
      />
      <p className="text-404">404 page not found</p>
    </section>
  );
};
