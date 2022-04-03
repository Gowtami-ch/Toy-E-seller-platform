import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Signup} from "./Components/signup/Signup";
import {Register} from "./Components/signup/Registrartion"
import Sellers from "./Components/sellersHome/Sellers"
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
          <Route exact path="/sellers">
            <Sellers />
          </Route>
        </Switch>
        </Router>
      {/* <Signup/>
      <Register/> */}
    </div>
  );
}

export default App;
