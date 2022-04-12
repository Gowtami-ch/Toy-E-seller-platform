import React from "react";
import { useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Header/Footer";
import styles from "./cart.module.css";
import { products } from "../Products";
import DeleteConfirmation from "./DeleteConfirmation";

export const Cart = () => {
  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [finalMessage, setfinalMessage] = useState(null);
  const showDeleteModal = (id) => {
    setId(id);
    setDeleteMessage("Are you sure you want to remove from the cart??");
    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = (type, id) => {
    setfinalMessage("deleted successfully");
    setDisplayConfirmationModal(false);
  };
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
                        <img
                          src="https://dummyimage.com/50x50/55595c/fff"
                          alt="..."
                        />{" "}
                      </td>
                      <td>{product.name}</td>
                      <td>In stock</td>
                      <td>
                        {/* <input className="form-control" type="text" value="1" /> */}
                        <div className={styles.number}>
                          <span className={styles.minus}>-</span>
                          <input
                            type="text"
                            className={styles.inputtxt}
                            value="1"
                          />
                          <span className={styles.plus}>+</span>
                        </div>
                      </td>
                      <td className="text-right">{product.price}</td>
                      <td className="text-right">
                        <button className="btn btn-sm btn-danger">
                          <i
                            className="fa fa-trash"
                            onClick={() => showDeleteModal(product.id)}
                          ></i>
                        </button>
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
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        id={id}
        message={deleteMessage}
      />
    </>
  );
};
