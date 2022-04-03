import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import {Signup} from "./Components/signup/Signup";
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
      <Signup/>
    </div>
  );
}

export default App;
