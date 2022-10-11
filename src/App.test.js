import { render } from "@testing-library/react";
import App from "./App";
import { Home } from "./pages/home";
import { CharacterDetails } from "./pages/character-details";
import { NotFound } from "./pages/not-found/index";
import { BrowserRouter } from "react-router-dom";
describe("Star Wars APP", () => {
  it("render 404 Page", () => {
    render(<NotFound />, { wrapper: BrowserRouter });
  });
  it("render home page", () => {
    render(<Home />, { wrapper: BrowserRouter });
  });
  it("render details page", () => {
    render(<CharacterDetails />, { wrapper: BrowserRouter });
  });
});
