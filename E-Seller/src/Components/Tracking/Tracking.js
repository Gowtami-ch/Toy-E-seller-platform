import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Header/Footer";
import styles from "./tracking.module.css"
export const Tracking = () => {
  return (
    <>
     <Header/>
     <div className={styles.body}>
      <div className={"container-fluid my-5 d-sm-flex justify-content-center  "+styles["container-fluid"]}>
        <div className={"card px-2  "+styles.card}>
          <div className="card-header bg-white">
            <div className="row justify-content-between">
              <div className="col">
                <p className="text-muted">
                  {" "}
                  Order ID{" "}
                  <span className={"font-weight-bold text-dark "+styles.bold}>1222528743</span>
                </p>
                <p className={"text-muted "+styles.p}>
                  {" "}
                  Place On{" "}
                  <span className={"font-weight-bold text-dark "+styles.bold}>
                    12,March 2022
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="media flex-column flex-sm-row">
              <div className="media-body ">
                <h5 className={"bold  "+styles.bold}>Girls chudidhar</h5>
                <p className={"text-muted  "+styles.p}> Qt: 1 </p>
                <h4 className={"mt-3 mb-4 bold "+styles.bold}>
                  {" "}
                  <span className="mt-5">&#x20B9;</span> 800{" "}
                </h4>
                <p className={"text-muted  "+styles.p}>
                  Tracking Status on: <span className={"Today "+styles.Today}>11:30pm, Today</span>
                </p>{" "}
                <button type="button" className={"btn btn-outline-primary d-flex  "+styles["btn-outline-primary"]}>
                  Reached Tirupathi
                </button>
              </div>
              <img
                className="align-self-center img-fluid"
                src="https://m.media-amazon.com/images/I/61-76wqNEvL._UX569_.jpg"
                width="180 "
                height="180"
              />
            </div>
          </div>
          <div className="row px-3">
            <div className="col">
              <ul className={styles.progressbar}>
                <li className={"step0 active "+styles.step1}>
                  PLACED
                </li>
                <li className={"step0 active text-center  "+styles.step2}>
                  SHIPPED
                </li>
                <li className={"step0 text-muted text-right  "+styles.step3}>
                  DELIVERED
                </li>
              </ul>
            </div>
          </div>
         
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};
