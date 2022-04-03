import React, { createRef } from "react";
import { useState } from "react";
import createStyles from "./newproduct.module.css";
import { Header } from "./header";
import imgDef from "../../Assets/user.png";

export const Sellnewproduct = ({ _id }) => {
  const [productName, setproductName] = useState("");
  const [type, settype] = useState("");
  const [description, setDescription] = useState("");
  const [platforms, setPlatforms] = useState("");
  const inputRef = createRef();
  const [chooseDate, setChooseDate] = useState("");
  const [date, setDate] = useState(new Date());
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const fileUploadButton = () => {
    inputRef.current.click();
  };
  const onChange = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [warning, setWarning] = useState("");
  return (
    <>
      <Header />
      <div className={`${createStyles.flexWrapper}`}>
        <div className={createStyles.bodyy}>
          <div className={createStyles.container}>
            <br />
            <br />
            <div className={createStyles.brandtitle}>Create Event</div>
            <div className={createStyles.inputs}></div>
            <section className={`${createStyles.imageArea}`}>
              <div>
                <img
                  src={(!image && imgDef) || URL.createObjectURL(image)}
                  alt={imgDef}
                  className={`${createStyles.eventImg}`}
                />
                <h4
                  className={`${createStyles.uploadBtn}`}
                  onClick={fileUploadButton}
                >
                  UPLOAD IMAGE
                </h4>
                <input
                  type="file"
                  name="image"
                  ref={inputRef}
                  // onChange={(e) => {
                  //   setImage(e.target.files[0]);
                  // }}
                  // hidden
                />
              </div>
              <section>
                <label htmlFor="productName" className={createStyles.clabel}>
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  onChange={onChange}
                  className={createStyles.cinput}
                />
                <br />
                <br />
                <label htmlFor="type" className={createStyles.clabel}>
                  Product Type
                </label>
                <input
                  type="text"
                  name="type"
                  onChange={onChange}
                  className={createStyles.cinput}
                />
                <br />
                <label htmlFor="description" className={createStyles.clabel}>
                  Product Description
                </label>
                <textarea
                  name="description"
                  rows="4"
                  cols="70"
                  onChange={onChange}
                  className={createStyles.ctextarea}
                />
              </section>
            </section>
            <br />
            <br />
            <br />
            <label htmlFor="" className={createStyles.clabel}>
              Price(in Rupees)
            </label>
                <input
              type="text"
              pattern="[0-9]*"
              name={`discounts`}
              placeholder={`eg: 1200`}
              className={createStyles.cinput}
            />
          
            <br />
            <br />
            <label htmlFor="platforms" className={createStyles.clabel}>
              Discount (if there)
            </label>
            <input
              type="text"
              name={`discounts`}
              placeholder={`eg: 20%`}
              className={createStyles.cinput}
            />
            <br />
            <br />
            <label htmlFor="phone" className={createStyles.clabel}>
              Contact Number
            </label>
            <input
              className={createStyles.cinput}
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <br />
            <br />
            <button className={createStyles.btn} onClick={handleSubmit}>
              Sell New product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sellnewproduct;
