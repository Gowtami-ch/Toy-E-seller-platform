/* Routes For Login -> Separate Routes for Organizer and User*/

const express = require("express");
const { postLogin, postLoginSeller } = require("../controllers/login");
// router middleware
const router = express.Router();

router.route("/").post(postLogin);

router.route("/seller").post(postLoginSeller);

module.exports = router;
