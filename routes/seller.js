/*  Taking care of "events" module as seen by organizer */
/*  Module For Organizers -> Creating and Managing events */
const express = require("express");
const auth = require("../middleware/auth");

const {
  createProduct,
  getAllProducts,
  getProductById,
  removeProductById,
  patchProductById,
  // createAnnouncement,
} = require("../controllers/seller");

const router = express.Router();

router.route("/").get(auth, getAllProducts);

router.route("/create-product").post(auth, createProduct);

// router.route("/create-event/uploads").post(auth, createEvent);

router.route("/product").get(auth, getProductById);

router.route("/modify-product").patch(auth, patchProductById);

router.route("/remove-product").post(auth, removeProductById);

// router.route("/announcements").post(auth, createAnnouncement);

module.exports = router;
