import React from "react";

export const Header = () => {
  return (
    <header>
       <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            E-Seller
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item m-auto">
                <a className="nav-link" >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Products
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact
                </a>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
            
              <a className="btn btn-success btn-sm ml-3" >
                <i className="fa fa-shopping-cart"></i> Cart &nbsp;&nbsp;
                <span className="badge badge-light">3</span>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
