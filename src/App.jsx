import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Simple } from "./pages/Simple";
import NavMenu from "./pages/NavMenu";
import { Transitions } from "./pages/Transitions";
import { TransitionArray } from "./pages/TransitionArray";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/navmenu">
          <NavMenu />
        </Route>
        <Route path="/simple">
          <Simple />
        </Route>
        <Route path="/transitions">
          <Transitions />
        </Route>
        <Route path="/array">
          <TransitionArray />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
