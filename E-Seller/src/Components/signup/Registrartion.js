import React from "react";
import image1 from "../../Assets/image1.png";
import logo1 from "../../Assets/seller_icon_round.png";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { postLogin } from "./SignUpUtilityFn";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Register = ({ setToken, setRole }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rePassword, setRePassword] = useState("");

  const changeRole = () => {
    const newRole = role === "user" ? "organizer" : "user";
    setRole2(newRole);
  };
  const [role, setRole2] = useState("user");

  const [warning, setWarning] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let value = 1;
    if (!username || !password || !email || !rePassword) {
      setWarning("Please Enter all form columns");
      setTimeout(() => setWarning(""), 3000);
      return;
    }
    if (password !== rePassword) {
      setWarning("Re-entered password is not matching");
      setTimeout(() => setWarning(""), 3000);
      return;
    } else if (password.length < 6) {
      setWarning("Password Length Must be more than 5");
      setTimeout(() => setWarning(""), 3000);
      return;
    }
    const url =
      role === "user"
        ? "/api/v1/registration/"
        : "/api/v1/registration/organizer/";
    await axios
      .post(url, {
        username,
        email,
        password,
      })
      .catch((err) => {
        // Rejected or error response
        value = 0;
        if (err.response) {
          const { data } = err.response;
          setWarning(data.msg);
          setTimeout(() => setWarning(""), 3000);
          return;
        } else {
          console.log(err);
          return;
        }
        // depending on msg we should handle warning message to user (like showing Dom elements)
      });
    if (value) {
      const loginParams = {
        username,
        password,
        setWarning,
        setRole,
        setToken,
        history,
        role,
      };
      postLogin(loginParams);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "rePassword") {
      setRePassword(value);
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
                  <label className={"text-muted " + styles.formControlLabel}>
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
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
                <div className="form-group">
                  <label className={"text-muted " + styles.formControlLabel}>
                    Re-enter Password
                  </label>
                  <input
                    id="Re-enter Password"
                    name="rePassword"
                    placeholder="Re-enter Password"
                    className="form-control"
                    type="password"
                    value={rePassword}
                    onChange={handleChange}
                  />{" "}
                </div>{" "}
                <br />
                <div className="row justify-content-center my-3 px-3">
                  {warning && <h4 className={styles.warning}>{warning}</h4>}
                  <button
                    className={"btn-block " + styles.btnColor}
                    onClick={handleSubmit}
                  >
                    Sign up to E-Seller as {role === "user" ? "user" : "seller"}
                  </button>{" "}
                </div>
                <p
                  href="#"
                  className={"mx-auto mb-3 " + styles.loginRedirect}
                  onClick={changeRole}
                >
                  click here to sign up as{" "}
                  <span>{role === "buyer" ? "seller" : "buyer"}</span>
                </p>
                <div className="row justify-content-center my-2">
                  {" "}
                  <Link to="/login">
                    <small className="text-muted">
                      Redirect back to Login Page
                    </small>
                  </Link>{" "}
                </div>
              </div>
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
