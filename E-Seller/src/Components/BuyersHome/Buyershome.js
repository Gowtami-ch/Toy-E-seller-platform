import React, { useEffect, useState } from "react";
import image from "../../Assets/pic2.jpg";
import styles from "../sellersHome/sellershome.module.css";
import {Card} from "../sellersHome/card"
import { QuotesArray } from "../sellersHome/quotes";
export const Buyershome = () => {
  const [quote1, setQuote1] = useState("");
  const [quote2, setQuote2] = useState("");
  useEffect(() => {
    let id;
    const asyncWrapper = async () => {
      id = setInterval(() => {
        const index = Math.floor(Math.random() * 6);
        setQuote1(() => {
          return "";
        });
        setQuote1(() => {
          return QuotesArray[index];
        });
        const index2 = Math.floor(Math.random() * 6);
        setQuote2(() => {
          return "";
        });
        setQuote2(() => {
          return QuotesArray[index2];
        });
      }, 10000);
    };
    asyncWrapper();
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles["top-container"]}>
          <section className={`${styles.OblurImage}`}>
            <div className={styles.img}>
              <img src={image} alt="home" />
              {/* <video autoPlay loop muted className={styles.video}>
                <source src={video} type="video/mp4" />
              </video> */}
              {quote1 && <h4 className={styles.quote1}>{quote1}</h4>}
              {quote2 && <h4 className={styles.quote2}>{quote2}</h4>}
            </div>
          </section>
          <section className={`${styles.mdbCustom}`}>
            <Card
              path="/products"
              imgSrc="https://cdn3.vectorstock.com/i/1000x1000/28/87/shop-now-symbol-special-offer-sign-vector-35712887.jpg"
              alt={"..."}
              cardName={`Shop Now`}
              cardDesc={``}
            />
            <Card
              path="/cart"
              imgSrc="https://optinmonster.com/wp-content/uploads/2019/01/cart-abandonment-statistics.png"
              alt={"..."}
              cardName={`Cart`}
              cardDesc={``}
            />
          </section>
        </div>
      </div>
    </>
  );
};
export default Buyershome;