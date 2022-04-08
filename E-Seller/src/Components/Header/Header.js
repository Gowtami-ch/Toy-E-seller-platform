import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../Assets/seller_icon_round.png";
import axios from "axios";

import { useHistory } from "react-router";

export const Header = () => {
  return (
    <header>
       <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            E-Seller
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarsExampleDefault"
          >
            <ul class="navbar-nav m-auto">
              <li class="nav-item m-auto">
                <a class="nav-link" >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Products
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cart
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact
                </a>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">
            
              <a class="btn btn-success btn-sm ml-3" >
                <i class="fa fa-shopping-cart"></i> Cart &nbsp;&nbsp;
                <span class="badge badge-light">3</span>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
