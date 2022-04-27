const { BadRequestError, CustomErrorAPI } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const {
  getUserByEmailDb,
  getUserByUsernameDb,
  createUserDb,
} = require("../db/user.db");

const registerBuyer = async (req, res) => {
  const { username, password, email, fullname } = req.body;

  if (!username || !password || !email) {
    throw new BadRequestError("Please Enter UserName, email and Password ");
  }

  const isExistingUserName = await getUserByUsernameDb(username);
  if (isExistingUserName) {
    const err = new CustomErrorAPI("UserName already exists");
    err.StatusCode = 401;
    throw err;
  }

  const isExistingEmail = await getUserByEmailDb(email);
  if (isExistingEmail) {
    const err = new CustomErrorAPI("Email Already exists");
    err.StatusCode = 401;
    throw err;
  }
  const securePass = await bcrypt.hash(password, 12);
  const newUser = await createUserDb({
    username: username,
    fullname: fullname,
    password: securePass,
    email: email,
  });

  // returns new user!!
  if (!newUser) {
    const err = new CustomErrorAPI("User Not Created");
    err.StatusCode = 401;
    throw err;
  }

  return res.status(StatusCodes.OK).json({
    success: true,
    data: {
      _id: newUser.userId,
      username: newUser.username,
      fullname: newUser.fullname,
      password: newUser.password,
      role: "buyer",
    },
  });
};

const registerSeller = async (req, res) => {
  const { username, password, email, fullname } = req.body;

  if (!username || !password || !email) {
    throw new BadRequestError("Please Enter UserName, email and Password ");
  }

  const isExistingUserName = await getUserByUsernameDb(username);
  if (isExistingUserName) {
    const err = new CustomErrorAPI("UserName already exists");
    err.StatusCode = 401;
    throw err;
  }

  const isExistingEmail = await getUserByUsernameDb(username);
  if (isExistingEmail) {
    const err = new CustomErrorAPI("Email Already exists");
    err.StatusCode = 401;
    throw err;
  }
  const securePass = await bcrypt.hash(password, 12);
  const newUser = createUserDb({
    username: username,
    fullname: fullname,
    password: securePass,
    email: email,
  });

  // returns new user!!
  if (!newUser) {
    const err = new CustomErrorAPI("User Not Created");
    err.StatusCode = 401;
    throw err;
  }

  return res.status(StatusCodes.OK).json({
    success: true,
    data: {
      _id: newUser.userId,
      username: newUser.username,
      fullname: newUser.fullname,
      password: newUser.password,
      role: "seller",
    },
  });
};
module.exports = { registerBuyer, registerSeller };
