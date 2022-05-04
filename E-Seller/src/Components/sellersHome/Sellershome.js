import React, { useEffect, useState } from "react";
import image from "../../Assets/pic2.jpg";
import styles from "./sellershome.module.css";
import { Card } from "./card";

export const Sellershome = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["top-container"]}>
          <section className={`${styles.OblurImage}`}>
            <div className={styles.img}>
              <img src={image} alt="home" />
            </div>
          </section>
          <section className={`${styles.mdbCustom}`}>
            <Card
              path="./sellnewproduct"
              imgSrc="https://productmanagementfestival.com/wp-content/uploads/2017/01/sell-your-product-online.jpg"
              alt={"..."}
              cardName={`Sell new product`}
              cardDesc={``}
            />
            <Card
              path="/myproducts"
              imgSrc="https://images.yourstory.com/cs/wordpress/2016/08/125-fall-in-love.png?w=1200"
              alt={"..."}
              cardName={`My Products`}
              cardDesc={``}
            />
          </section>
        </div>
      </div>
    </>
  );
};
export default Sellershome;
