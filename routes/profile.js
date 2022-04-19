/* Secure Routes related to profile module => Uses Auth Middleware */
/* Related to User Details Required for Quiz Module */
const express = require("express");
const auth = require("../middleware/auth");

const {
  postProfile,
  getProfile,
  getProductDetails,
} = require("../controllers/profile");

const router = express.Router();

router.route("/").get(auth, getProfile);

router.route("/edit").post(auth, postProfile);

router.route("/product_details").get(auth, getProductDetails);
module.exports = router;
