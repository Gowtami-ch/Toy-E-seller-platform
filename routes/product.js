const router = require("express").Router();
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductByName,
  getProductReviews,
  createProductReview,
  updateProductReview,
} = require("../controllers/products.controller");
const auth = require("../middleware/auth");

router.route("/").get(getAllProducts).post(auth, createProduct);

router
  .route("/:id")
  .get(getProduct)
  .get(getProductByName)
  .put(auth, updateProduct)
  .delete(auth, deleteProduct);

router
  .route("/:id/reviews")
  .get(getProductReviews)
  .post(auth, createProductReview)
  .put(auth, updateProductReview);

module.exports = router;
