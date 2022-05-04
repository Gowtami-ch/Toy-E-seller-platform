import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Header/Footer";
import { products } from "../Products";
import { Link, useParams, useLocation } from "react-router-dom";
import styles from "./productdetails.module.css";
export const Productdetail = (props) => {
  console.log(props.location);
  return (
    <>
      <Header />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
      />
      <br />
      <br />
      <table className={styles.table1}>
        <tr>
          <td className={styles.col1}>
            <img
              src="https://rukminim1.flixcart.com/image/714/857/ethnic-set/f/r/h/kr-525-cream-aarika-11-12-years-original-imaefktepmtkzyjy.jpeg?q=50"
              className={styles.img}
            />
          </td>
          <td>
            <font className={styles.Name}>Name</font>
            <br />
            <font className={styles.description}>
              Description description description description
            </font>
            <br />
            <br />
            <font style={{ color: "green" }}>Special price</font>
            <br />
            600/-
            <br />
            <span className={"fa fa-star checked " + styles.checked}></span>
            <span className={"fa fa-star checked " + styles.checked}></span>
            <span className={"fa fa-star checked " + styles.checked}></span>
            <span className={"fa fa-star checked " + styles.checked}></span>
            <span className="fa fa-star "></span>
            <br />
            <br />
            <div>
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width="18"
                height="18"
              ></img>
              &nbsp;&nbsp; Special PriceGet extra 16% off (price inclusive of
              discount) T&C
              <br />
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width="18"
                height="18"
              ></img>
              &nbsp;&nbsp; Bank Offer 10% Instant Discount with Axis Bank Credit
              and Debit CardsT&C <br />
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width="18"
                height="18"
              ></img>
              &nbsp;&nbsp; Bank Offer 10% Instant Discount on Mastercard on
              Fashion for First 3 Prepaid PaymentsT&C
              <br />
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width="18"
                height="18"
              ></img>
              &nbsp;&nbsp; Bank Offer 10% Instant Discount on ICICI Bank Credit
              Cards. T&C
              <br />
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width="18"
                height="18"
              ></img>
              &nbsp;&nbsp; Bank Offer 10% Instant Discount on IBM Pay. T&C
              <br />
            </div>
            <br />
            <button type="button" className={styles.cartbtn}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class=""
                  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                  fill="#fff"
                ></path>
              </svg>
              &nbsp;&nbsp;&nbsp; Add To Cart
            </button>
            <button type="button" className={styles.buybtn}>
              <span class="bi bi-lightning-fill" style={{color: "white"}}></span>{" "}
              &nbsp;&nbsp; Buy Now
            </button>
          </td>
        </tr>
      </table>
      <Footer />
    </>
  );
};
