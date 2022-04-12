import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Header/Footer";
import styles from "./cart.module.css"
const products = [
  {
    id: 1,
    name: "girl jeans",
    description: "girl jean pants",
    price: "700",
    img: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE2aU5YT3dDVFMuX0FDX1VMMTUwMF8uanBn.jpg",
  },
  {
    id: 2,
    name: "churidar",
    description: "girl churidar",
    price: "400",
    img: "https://rukminim1.flixcart.com/image/714/857/ethnic-set/f/r/h/kr-525-cream-aarika-11-12-years-original-imaefktepmtkzyjy.jpeg?q=50",
  },
  {
    id: 3,
    name: "churidhar2",
    description: "girl churidar2",
    price: "600",
    img: "https://m.media-amazon.com/images/I/61-76wqNEvL._UX569_.jpg",
  },
  {
    id: 4,
    name: "girl jeans",
    description: "girl jean pants",
    price: "700",
    img: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE2aU5YT3dDVFMuX0FDX1VMMTUwMF8uanBn.jpg",
  },
  {
    id: 5,
    name: "churidar",
    description: "girl churidar",
    price: "400",
    img: "https://rukminim1.flixcart.com/image/714/857/ethnic-set/f/r/h/kr-525-cream-aarika-11-12-years-original-imaefktepmtkzyjy.jpeg?q=50",
  },
  {
    id: 6,
    name: "churidhar2",
    description: "girl churidar2",
    price: "600",
    img: "https://m.media-amazon.com/images/I/61-76wqNEvL._UX569_.jpg",
  },
  {
    id: 8,
    name: "girl jeans",
    description: "girl jean pants",
    price: "700",
    img: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE2aU5YT3dDVFMuX0FDX1VMMTUwMF8uanBn.jpg",
  },
  {
    id: 9,
    name: "churidar",
    description: "girl churidar",
    price: "400",
    img: "https://rukminim1.flixcart.com/image/714/857/ethnic-set/f/r/h/kr-525-cream-aarika-11-12-years-original-imaefktepmtkzyjy.jpeg?q=50",
  },
  {
    id: 10,
    name: "churidhar2",
    description: "girl churidar2",
    price: "600",
    img: "https://m.media-amazon.com/images/I/61-76wqNEvL._UX569_.jpg",
  },
];
export const Cart = () => {
  return (
    <>
      <Header />
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />

      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Product</th>
                    <th scope="col">Available</th>
                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                    <th scope="col" className="text-right">
                      Price
                    </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <td>
                        <img src="https://dummyimage.com/50x50/55595c/fff" />{" "}
                      </td>
                      <td>{product.name}</td>
                      <td>In stock</td>
                      <td>
                        {/* <input className="form-control" type="text" value="1" /> */}
                        <div className={styles.number}>
                          <span className={styles.minus}>-</span>
                          <input type="text" className={styles.inputtxt} value="1" />
                          <span className={styles.plus}>+</span>
                        </div>
                      </td>
                      <td className="text-right">{product.price}</td>
                      <td className="text-right">
                        <button className="btn btn-sm btn-danger">
                          <i className="fa fa-trash"></i>{" "}
                        </button>{" "}
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Sub-Total</td>
                    <td className="text-right">30000</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Shipping</td>
                    <td className="text-right">600</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td className="text-right">
                      <strong>30600</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col mb-2">
            <div className="row">
              <div className="col-sm-12  col-md-6">
                <button className="btn btn-block btn-light">
                  Continue Shopping
                </button>
              </div>
              <div className="col-sm-12 col-md-6 text-right">
                <button className="btn btn-lg btn-block btn-success text-uppercase">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
