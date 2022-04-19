/* Secure Routes related to Events module => Uses Auth Middleware */
/* Taking care of "events" module as seen by user -> Marking Events as interested and Adding Reviews */

const express = require("express");
const auth = require("../middleware/auth");

const {
  getFavourites,
  addToFavourites,
  getAllProducts,
  getProductById,
  createReview,
  removeFromFavourites,
  getCartItems,
  addToCartItems,
  removeFromCartItems,
} = require("../controllers/buyer");

const router = express.Router();

// Add events to marked or view marked events
router.route("/").get(auth, getAllProducts);
router
  .route("/favourites")
  .get(auth, getFavourites)
  .post(auth, addToFavourites);

router.route("/removeFromFavourites").post(auth, removeFromFavourites);

// Get specific event by id->query parameter
router.route("/product").get(auth, getProductById);

router.route("/reviews").post(auth, createReview);

router.route("/cartItems").get(auth, getCartItems).post(auth, addToCartItems);

router.route("/removeFromCartItems").post(auth, removeFromCartItems);

module.exports = router;
