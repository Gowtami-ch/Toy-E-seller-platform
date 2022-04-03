import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import {Signup} from "./Components/signup/Signup";
import {Register} from "./Components/signup/Registrartion"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Signup />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
        </Router>
      {/* <Signup/>
      <Register/> */}
    </div>
  );
}

export default App;
