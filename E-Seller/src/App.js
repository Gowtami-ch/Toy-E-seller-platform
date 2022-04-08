import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Signup} from "./Components/signup/Signup";
import {Register} from "./Components/signup/Registrartion"
import {Products} from "./Components/Buyers/Products"
import {Cart} from "./Components/cart/Cart"
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
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
        </Router>
      
    </div>
  );
}

export default App;
