import logo from "./logo.svg";
import "./App.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { CharacterDetails } from "./pages/character-details";
import { NotFound } from "./pages/not-found";
import { LoadingSpinner } from "./components/loading-spinner";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Suspense fallback={<LoadingSpinner/>}>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/character/:characterName"
            element={<CharacterDetails />}
          />
             <Route path="*" element={<NotFound/>} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
