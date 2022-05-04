const router = require("express").Router();
const {
  getOrder,
  getAllOrders,
  createOrder,
} = require("../controllers/orders.controller");
const auth = require("../middleware/auth");

router.route("/create").post(auth, createOrder);

router.route("/").get(auth, getAllOrders);

router.route("/:id").get(auth, getOrder);

module.exports = router;
