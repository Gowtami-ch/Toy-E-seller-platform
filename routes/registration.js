/* Routes For Registration -> Separate Routes for Organizer and User*/

const express = require("express");
const {
  registerUser,
  registerSeller,
} = require("../controllers/registration.controller");

// router middleware
const router = express.Router();

// Probably better to use a middleware and disambiguate the model
// Then from here i can post to a single controller
router.route("/").post(registerUser);

router.route("/organizer").post(registerSeller);

module.exports = router;
