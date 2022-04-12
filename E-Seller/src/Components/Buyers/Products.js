import React from "react";
import { Header } from "../Header/Header";
import { Search } from "../Search/search";
import { Footer } from "../Header/Footer";
import Grid from "@material-ui/core/Grid";
import { AddShoppingCart } from "@material-ui/icons";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./productstyles.module.css";
import { products } from "../Products";
function Productrating(props) {
  const rating = props.rating;
  switch (rating) {
    case 1:
      return (
        <>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className="fa fa-star "></span>
          <span className="fa fa-star "></span>
          <span className="fa fa-star "></span>
          <span className="fa fa-star "></span>
        </>
      );
      break;
    case 2:
      return (
        <>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className="fa fa-star "></span>
          <span className="fa fa-star "></span>
          <span className="fa fa-star "></span>
        </>
      );
      break;
    case 3:
      return (
        <>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className="fa fa-star "></span>
          <span className="fa fa-star "></span>
        </>
      );
      break;
    case 4:
      return (
        <>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className="fa fa-star "></span>
        </>
      );
      break;
    case 5:
      return (
        <>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className={"fa fa-star checked " + styles.checked}></span>
          <span className={"fa fa-star checked " + styles.checked}></span>
        </>
      );
      break;
    default:
      break;
  }
}
export const Products = () => {
  return (
    <>
      <Header />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <ul className={"filter" + styles.ui}>
        <li className={styles.li}>
          <form className="form-inline my-2 my-lg-0">
            <div className="input-group input-group-bg">
              <input
                type="text"
                className="form-control col-lg-8"
                aria-label="big"
                style={{
                  "margin-left": "650px",
                  height: "50px",
                  width: "300px",
                }}
                placeholder="Search for brands, products and more"
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-secondary btn-number">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </li>
      </ul>

      <div>
        <ul className={"filter" + styles.ui}>
          <li className={styles.licard}>
            <main className={styles.content}>
              <div className={styles.toolbar} />
              <Grid container justify="center" spacing={3}>
                {products.map((product) => (
                  <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <div>
                      <Link
                        to={{
                          pathname: "/productdetail",
                          param1: product,
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <Card className={styles.root}>
                          <CardMedia
                            className={styles.media}
                            image={product.img}
                            title={product.name}
                          />
                          <CardContent>
                            <div className={styles.cardContent}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {product.name}
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {product.price}
                              </Typography>
                            </div>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              {" "}
                              {product.description}
                            </Typography>
                            <Typography>
                              {" "}
                              {/* {product.rating} */}
                              <Productrating rating={product.rating} />
                              <span className={styles.reviewer}>
                                {product.raters}
                              </span>
                            </Typography>
                          </CardContent>
                          <CardActions
                            disableSpacing
                            className={styles.cardActions}
                          >
                            <IconButton aria-label="Add to Cart">
                              <AddShoppingCart />
                            </IconButton>
                          </CardActions>
                        </Card>
                      </Link>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </main>
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
};
