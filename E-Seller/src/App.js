import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Signup } from "./Components/signup/Signup";
import { Register } from "./Components/signup/Registrartion";
import { Products } from "./Components/Buyers/Products";
import { Cart } from "./Components/cart/Cart";
import { Productdetail } from "./Components/Buyers/Productdetail";
import { Tracking } from "./Components/Tracking/Tracking";
import { Payment } from "./Components/Payments/Payment";
import { Profile } from "./Components/Profile/Profile";
import { Filterbar } from "./Components/Filterbar/Filterbar";
import { Sellers } from "./Components/sellersHome/Sellers";
import { Sellnewproduct } from "./Components/sellersHome/sellnewproduct";
import { MyProducts } from "./Components/sellersHome/myproducts";
import { Sellersproductdetail } from "./Components/sellersHome/sellerproductdetail";
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
          {/* <Route exact path="/filter">
            <Filterbar />
          </Route> */}
          <Route exact path="/sellers">
            <Sellers />
          </Route>
           <Route exact path="/sellnewproduct">
            <Sellnewproduct />
          </Route>
           <Route exact path="/myproducts">
            <MyProducts />
          </Route>
           <Route exact path="/sellersproductdetail">
            <Sellersproductdetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
