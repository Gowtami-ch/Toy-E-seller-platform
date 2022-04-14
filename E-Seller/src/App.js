import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import {Signup} from "./Components/signup/Signup";
import {Register} from "./Components/signup/Registrartion"
import {Products} from "./Components/Buyers/Products"
import {Cart} from "./Components/cart/Cart"
import {Productdetail} from "./Components/Buyers/Productdetail"
import { Tracking } from "./Components/Tracking/Tracking";
import { Payment } from "./Components/Payments/Payment";
import { Profile } from "./Components/Profile/Profile";
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
           <Route exact path="/productdetail">
            <Productdetail />
          </Route>
           <Route exact path="/tracking">
            <Tracking />
          </Route>
           <Route exact path="/payment">
            <Payment />
          </Route>
            <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
        </Router>
      
    </div>
  );
}

export default App;
