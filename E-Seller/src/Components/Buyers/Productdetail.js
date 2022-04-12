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
            <ul>
              <li>
                Special PriceGet extra 16% off (price inclusive of discount) T&C
              </li>
              <li>
                {" "}
                Bank Offer 10% Instant Discount with Axis Bank Credit and Debit
                CardsT&C{" "}
              </li>
              <li>
                Bank Offer 10% Instant Discount on Mastercard on Fashion for
                First 3 Prepaid PaymentsT&C
              </li>
              <li>
                Bank Offer 10% Instant Discount on ICICI Bank Credit Cards. T&C
              </li>
              <li>Bank Offer 10% Instant Discount on IBM Pay. T&C</li>
            </ul>
            <button
              type="button"
              className={"btn btn-warning " + " " + styles.cartbtn}
            >
              Add To Cart
            </button>
            <button
              type="button"
              className={"btn btn-success " + " " + styles.buybtn}
            >
              Buy Now
            </button>
          </td>
        </tr>
      </table>
      <Footer />
    </>
  );
};
