import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Header/Footer";
import styles from "./payment.module.css";
export const Payment = () => {
  return (
    <>
      <Header />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      />
      <div class="container py-3" />

      <div class="row mb-4">
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="display-6">Payment Form</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <div class="card ">
            <div class="card-header">
              <div class="tab-content">
                <div id="credit-card" class="tab-pane fade show active pt-3">
                  <form role="form" onsubmit="event.preventDefault()">
                    <div class="form-group">
                      <label for="username">
                        <h6>Card Owner</h6>
                      </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Card Owner Name"
                        required
                        class="form-control "
                      />
                    </div>
                    <div class="form-group">
                      <label for="cardNumber" />
                      <h6>Card number</h6>
                      <div class="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Valid card number"
                          class="form-control "
                          required
                        />
                        <div class="input-group-append">
                          <span class="input-group-text text-muted">
                            <i class="fab fa-cc-visa mx-1"></i>
                            <i class="fab fa-cc-mastercard mx-1"></i>
                            <i class="fab fa-cc-amex mx-1"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-8">
                        <div class="form-group">
                          <label>
                            <span class="hidden-xs">
                              <h6>Expiration Date</h6>
                            </span>
                          </label>
                          <div class="input-group">
                            <input
                              type="number"
                              placeholder="MM"
                              name=""
                              class="form-control"
                              required
                            />
                            <input
                              type="number"
                              placeholder="YY"
                              name=""
                              class="form-control"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group mb-4">
                          <label
                            data-toggle="tooltip"
                            title="Three digit CV code on the back of your card"
                          >
                            <h6>
                              CVV <i class="fa fa-question-circle d-inline"></i>
                            </h6>
                          </label>
                          <input type="text" required class="form-control" />
                        </div>
                      </div>
                    </div>
                    <br />
                    <button
                      type="button"
                      class="subscribe btn btn-primary btn-block shadow-sm"
                    >
                      Confirm Payment
                    </button>
                    <br />
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};
