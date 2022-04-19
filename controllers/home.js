const { StatusCodes } = require("http-status-codes");
const { UnauthenticatedError } = require("../errors");
require("dotenv").config();

/* Checking Status of User -> Role And UserName */
const checkUser = async (req, res) => {
  let username, role;
  if (req.buyer) {
    username = req.buyer.username;
    role = req.buyer.role;
  } else if (req.seller) {
    username = req.seller.username;
    role = req.seller.role;
  }
  if (username) {
    return res
      .status(StatusCodes.OK)
      .json({ success: true, data: { username, role } });
  }
  throw new UnauthenticatedError("Invalid Token or No such User Exists");
};

module.exports = { checkUser };
