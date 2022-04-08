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
import styles from "./productstyles.module.css";
const products = [
  {
    id: 1,
    name: "girl jeans",
    description: "girl jean pants",
    price: "700",
    img: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE2aU5YT3dDVFMuX0FDX1VMMTUwMF8uanBn.jpg",
  },
  {
    id: 2,
    name: "churidar",
    description: "girl churidar",
    price: "400",
    img: "https://rukminim1.flixcart.com/image/714/857/ethnic-set/f/r/h/kr-525-cream-aarika-11-12-years-original-imaefktepmtkzyjy.jpeg?q=50",
  },
  {
    id: 3,
    name: "churidhar2",
    description: "girl churidar2",
    price: "600",
    img: "https://m.media-amazon.com/images/I/61-76wqNEvL._UX569_.jpg",
  },
  {
    id: 4,
    name: "girl jeans",
    description: "girl jean pants",
    price: "700",
    img: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE2aU5YT3dDVFMuX0FDX1VMMTUwMF8uanBn.jpg",
  },
  {
    id: 5,
    name: "churidar",
    description: "girl churidar",
    price: "400",
    img: "https://rukminim1.flixcart.com/image/714/857/ethnic-set/f/r/h/kr-525-cream-aarika-11-12-years-original-imaefktepmtkzyjy.jpeg?q=50",
  },
  {
    id: 6,
    name: "churidhar2",
    description: "girl churidar2",
    price: "600",
    img: "https://m.media-amazon.com/images/I/61-76wqNEvL._UX569_.jpg",
  },
  {
    id: 8,
    name: "girl jeans",
    description: "girl jean pants",
    price: "700",
    img: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE2aU5YT3dDVFMuX0FDX1VMMTUwMF8uanBn.jpg",
  },
  {
    id: 9,
    name: "churidar",
    description: "girl churidar",
    price: "400",
    img: "https://rukminim1.flixcart.com/image/714/857/ethnic-set/f/r/h/kr-525-cream-aarika-11-12-years-original-imaefktepmtkzyjy.jpeg?q=50",
  },
  {
    id: 10,
    name: "churidhar2",
    description: "girl churidar2",
    price: "600",
    img: "https://m.media-amazon.com/images/I/61-76wqNEvL._UX569_.jpg",
  },
];
const Products = () => {
  return (
    <>
    <Header />
      <ul className={"filter" + styles.ui}>
        <li className={styles.li}>
          <Search />
        </li>
      </ul>
       <ul className={"filter" + styles.ui}>
        <li className={styles.li}>
          <main className={styles.content}>
        <div className={styles.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <div>
                <Card className={styles.root}>
                  <CardMedia
                    className={styles.media}
                    image={product.img}
                    title={product.name}
                  />
                  <CardContent>
                    <div className={styles.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
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
                  </CardContent>
                  <CardActions disableSpacing className={styles.cardActions}>
                    <IconButton aria-label="Add to Cart">
                      <AddShoppingCart />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </main>
        </li>
      </ul>
     
      <Footer />
    </>
  );
};
export default Products;
