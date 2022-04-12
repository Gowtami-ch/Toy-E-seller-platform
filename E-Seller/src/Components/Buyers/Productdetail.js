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
            <br /><br />
              <div>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  width="18"
                  height="18"
                ></img>&nbsp;&nbsp;
                Special PriceGet extra 16% off (price inclusive of discount) T&C
              <br />
              
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  width="18"
                  height="18"
                ></img>&nbsp;&nbsp;
                Bank Offer 10% Instant Discount with Axis Bank Credit and Debit
                CardsT&C{" "}
              <br />
              
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  width="18"
                  height="18"
                ></img>&nbsp;&nbsp;
                Bank Offer 10% Instant Discount on Mastercard on Fashion for
                First 3 Prepaid PaymentsT&C
              <br />
              
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  width="18"
                  height="18"
                ></img>&nbsp;&nbsp;
                Bank Offer 10% Instant Discount on ICICI Bank Credit Cards. T&C
              <br />
              
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  width="18"
                  height="18"
                ></img>&nbsp;&nbsp;
                Bank Offer 10% Instant Discount on IBM Pay. T&C
              <br />
            </div>
            <br />

            <button
              type="button"
              className={"btn btn-warning  " + styles.cartbtn}
            >
              Add To Cart
            </button>
            <button
              type="button"
              className={"btn btn-success  " + styles.buybtn}
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
