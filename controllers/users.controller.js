const userService = require("../services/user.service");
const { UnauthenticatedError, BadRequestError } = require("../errors");

const getAllUsers = async (req, res) => {
  const results = await userService.getAllUsers();
  res.status(200).json(results);
};

const createUser = async (req, res) => {
  const { username, password, email, fullname } = req.body;

  const user = await userService.createUser({
    username,
    password,
    email,
    fullname,
  });

  res.status(201).json({
    status: "success",
    user,
  });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  if (+id === req.user.id || req.user.roles.includes("admin")) {
    try {
      const user = await userService.getUserById(id);
      return res.status(200).json(user);
    } catch (error) {
      throw new UnauthenticatedError("Invalid username");
    }
  }
  throw new UnauthenticatedError("Unauthorized");
};

const getUserProfile = async (req, res) => {
  const { id } = req.user;

  const user = await userService.getUserById(id);

  return res.status(200).json(user);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  getUserProfile,
};
