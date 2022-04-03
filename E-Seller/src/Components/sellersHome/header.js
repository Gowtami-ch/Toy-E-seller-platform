import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../Assets/seller_icon_round.png";
import axios from "axios";

import { useHistory } from "react-router";

export const Header = () => {
  return (
     <header className={styles.header}>
        <div className={styles.threeLineBtn}>
          
          <ul className={styles.menuBtnCustom}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <img className={styles.logo} src={logo} />
        <div>
          <h1 className={styles.heading}>E-Seller</h1>
        </div>
        <ul className={"nav " + styles.settingsList}>
          <li className={styles.navLoginBtn} id={styles.idLoginBtn}>
            Login
          </li>
          <li className={styles.navLoginBtn} id={styles.navSignUp}>
            Sign Up
          </li>
        </ul>
      </header>
  );
};