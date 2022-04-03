import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import {Signup} from "./Components/signup/Signup";
import {Register} from "./Components/signup/Registrartion"
function App() {
  return (
    <div className="App">
      
      {/* <Router>
        <Routes>
          <Route exact path="/">
            <Signup />
          </Route>
        </Routes>
      </Router> */}
      {/* <Signup/> */}
      <Register/>
    </div>
  );
}

export default App;
