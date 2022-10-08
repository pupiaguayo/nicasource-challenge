import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CharacterDetails } from "./pages/character-details";
function App() {
  return (
    <div className="container">
      <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route
          exact path="/character-details"
          component={CharacterDetails}
        ></Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
