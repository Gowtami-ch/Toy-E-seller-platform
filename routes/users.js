const {
  getAllUsers,
  createUser,
  getUserById,
  getUserProfile,
} = require("../controllers/users.controller");
const router = require("express").Router();
const auth = require("../middleware/auth");

router.route("/").get(auth, getAllUsers).post(auth, createUser);
router.route("/profile").get(getUserProfile);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
