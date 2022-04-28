const {
  getAllUsers,
  createUser,
  getUserById,
  getUserProfile,
  updateUser,
  deleteUser,
  getAllSellers,
  createSeller,
  getSellerById,
  getSellerProfile,
  updateSeller,
  deleteSeller,
} = require("../controllers/users.controller");
const router = require("express").Router();
const auth = require("../middleware/auth");

router.route("/").get(auth, getAllUsers).post(auth, createUser);
router.route("/profile").get(getUserProfile);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/sellers").get(auth, getAllSellers).post(auth, createSeller);
router.route("/sellerprofile").get(getSellerProfile);
router
  .route("/seller:id")
  .get(getSellerById)
  .put(updateSeller)
  .delete(deleteSeller);

module.exports = router;
