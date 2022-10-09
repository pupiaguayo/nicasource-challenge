import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { CharacterDetails } from "./pages/character-details";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/character/:characterName"
            element={<CharacterDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
