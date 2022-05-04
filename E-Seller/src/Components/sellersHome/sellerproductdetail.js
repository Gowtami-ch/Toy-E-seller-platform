import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Header/Footer";
import { Sellerproducts } from "../Sellerproducts";
import { Link, useParams, useLocation } from "react-router-dom";
import styles from "../Buyers/productdetails.module.css";
export const Sellersproductdetail = (props) => {
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
              <b>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </b>
              &nbsp;&nbsp;&nbsp; Edit product
            </button>
            <button type="button" className={styles.buybtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
              &nbsp;&nbsp; Remove product
            </button>
          </td>
        </tr>
      </table>
      <Footer />
    </>
  );
};
