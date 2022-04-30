import React from "react";
import { useState } from "react";
import image1 from "../../Assets/image1.png";
import logo1 from "../../Assets/seller_icon_round.png";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import { postLogin } from "./SignUpUtilityFn";
import { useHistory } from "react-router-dom";

export const Signup = ({ setToken, setRole }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [warning, setWarning] = useState("");
  const history = useHistory();

  const changeRole = () => {
    const newRole = role === "user" ? "organizer" : "user";
    setRole2(newRole);
  };
  const [role, setRole2] = useState("user");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // parameters for postLogin Function
    const loginParams = {
      username,
      password,
      setToken,
      setRole,
      setWarning,
      history,
      role,
    };
    postLogin(loginParams);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <div className={"px-4 py-5 mx-auto container " + styles.container}>
      <div className={styles.card + " " + styles.card0}>
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className={styles.card + " " + styles.card1}>
            <div className="row justify-content-center my-auto">
              <div className="col-md-8 col-10 my-5">
                <div className="row justify-content-center px-3 mb-3">
                  <img id={styles.logo} src={logo1} alt="logo1" />{" "}
                </div>
                <h3 className={"mb-5 text-center " + styles.heading}>
                  Welcome again!
                </h3>
                <div className="form-group">
                  <label className={"text-muted " + styles.formControlLabel}>
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    className="form-control"
                    value={username}
                    onChange={handleChange}
                  />{" "}
                </div>
                <div className="form-group">
                  {" "}
                  <label className={"text-muted " + styles.formControlLabel}>
                    Password
                  </label>
                  <input
                    type="password"
                    id="psw"
                    name="psw"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={handleChange}
                  />{" "}
                </div>
                <div className="row justify-content-center my-3 px-3">
                  {" "}
                  {warning && <h4 className={styles.warning}>{warning}</h4>}
                  <button
                    className={"btn-block " + styles.btnColor}
                    onClick={handleSubmit}
                  >
                    Login to E-Seller as {role === "user" ? "user" : "seller"}
                  </button>{" "}
                </div>
                <p
                  href="#"
                  className={"mx-auto mb-3 " + styles.loginRedirect}
                  onClick={changeRole}
                >
                  click here to login as Seller
                  <span>{role === "buyer" ? "seller" : "buyer"}</span>
                </p>
              </div>
            </div>
            <div className={"text-center mb-5 " + styles.bottom}>
              <p href="#" className={"mx-auto mb-3 " + styles.smText}>
                Don't have an account?
              </p>
              <button className={"btn ml-2 " + styles.btnWhite}>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Create new
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.card + " " + styles.card2}>
            <div className={"my-auto mx-md-5 px-md-5 right" + styles.right}>
              <div>
                <img
                  className="rounded mx-auto d-block"
                  src={image1}
                  alt="image1"
                  width="450px"
                  height="450px"
                />
              </div>
              <br />
              <br />
              <div>
                <h3 className="text-white text-center mb-5">E-Seller</h3>{" "}
              </div>
              <div>
                <small className="text-white">a toy E-seller platform</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
