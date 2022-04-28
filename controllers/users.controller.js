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
  if (+id === req.user.id) {
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

const updateUser = async (req, res) => {
  const { username, email, fullname, address, city, state, country } = req.body;
  if (+req.params.id === req.user.id) {
    try {
      const results = await userService.updateUser({
        username,
        email,
        fullname,
        address,
        city,
        state,
        country,
        id: req.params.id,
      });
      return res.status(201).json(results);
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  }
  throw new UnauthenticatedError(401, "Unauthorized");
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (+id === req.user.id) {
    try {
      const result = await userService.deleteUser(id);
      res.status(200).json(result);
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  }
  throw new UnauthenticatedError(401, "Unauthorized");
};

const getAllSellers = async (req, res) => {
  const results = await userService.getAllSellers();
  res.status(200).json(results);
};

const createSeller = async (req, res) => {
  const { username, password, email, fullname } = req.body;

  const seller = await userService.createSeller({
    username,
    password,
    email,
    fullname,
  });

  res.status(201).json({
    status: "success",
    seller,
  });
};

const getSellerById = async (req, res) => {
  const { id } = req.params;
  if (+id === req.seller.id) {
    try {
      const seller = await userService.getSellerById(id);
      return res.status(200).json(seller);
    } catch (error) {
      throw new UnauthenticatedError("Invalid username");
    }
  }
  throw new UnauthenticatedError("Unauthorized");
};

const getSellerProfile = async (req, res) => {
  const { id } = req.seller;

  const seller = await userService.getSellerById(id);

  return res.status(200).json(seller);
};

const updateSeller = async (req, res) => {
  const { username, email, fullname, address, city, state, country } = req.body;
  if (+req.params.id === req.seller.id) {
    try {
      const results = await userService.updateSeller({
        username,
        email,
        fullname,
        address,
        city,
        state,
        country,
        id: req.params.id,
      });
      return res.status(201).json(results);
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  }
  throw new UnauthenticatedError(401, "Unauthorized");
};

const deleteSeller = async (req, res) => {
  const { id } = req.params;
  if (+id === req.seller.id) {
    try {
      const result = await userService.deleteSeller(id);
      res.status(200).json(result);
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  }
  throw new UnauthenticatedError(401, "Unauthorized");
};

module.exports = {
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
};
