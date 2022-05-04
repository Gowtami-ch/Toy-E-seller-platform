import React from "react";
// import { Header } from "./Header";
import { Header } from "../Header/Header";
import { Footer } from "../Header/Footer";
import styles from "./sellershome.module.css";
import Sellershome from "./Sellershome";
export const Sellers = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          {/* <Navbar /> */}
          <div className="col py-3">
            <Sellershome />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
