const { BadRequestError, CustomErrorAPI } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const Buyer = require("../models/buyer");
const Seller = require("../models/seller");

const registerBuyer = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    throw new BadRequestError("Please Enter UserName, email and Password ");
  }

  const isExistingUserName = await User.findOne({ username: username });
  if (isExistingUserName) {
    const err = new CustomErrorAPI("UserName already exists");
    err.StatusCode = 401;
    throw err;
  }

  const isExistingEmail = await User.findOne({ email: email });
  if (isExistingEmail) {
    const err = new CustomErrorAPI("Email Already exists");
    err.StatusCode = 401;
    throw err;
  }
  const securePass = await bcrypt.hash(password, 12);
  const newUser = {
    username: username,
    password: securePass,
    email: email,
  };

  // returns new user!!
  const created = await Buyer.create(newUser);
  if (!created) {
    const err = new CustomErrorAPI("Buyer Not Created");
    err.StatusCode = 401;
    throw err;
  }

  const userId = created._id;

  return res.status(StatusCodes.OK).json({
    success: true,
    data: {
      _id: userId,
      username: username,
      password: password,
      role: "buyer",
    },
  });
};

const registerSeller = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    throw new BadRequestError("Please Enter UserName, email and Password ");
  }

  const isExistingUserName = await Organizer.findOne({ username: username });
  if (isExistingUserName) {
    const err = new CustomErrorAPI("UserName already exists");
    err.StatusCode = 401;
    throw err;
  }

  const isExistingEmail = await Organizer.findOne({ email: email });
  if (isExistingEmail) {
    const err = new CustomErrorAPI("Email Already exists");
    err.StatusCode = 401;
    throw err;
  }
  const securePass = await bcrypt.hash(password, 12);
  const newUser = {
    username: username,
    password: securePass,
    email: email,
  };

  // returns new user!!
  const created = await Seller.create(newUser);
  if (!created) {
    const err = new CustomErrorAPI("User Not Created");
    err.StatusCode = 401;
    throw err;
  }

  const userId = created._id;

  return res.status(StatusCodes.OK).json({
    success: true,
    data: {
      _id: userId,
      username: username,
      password: password,
      role: "seller",
    },
  });
};
module.exports = { registerBuyer, registerSeller };
