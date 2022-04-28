const {
  createUserDb,
  getUserByEmailDb,
  getAllUsersDb,
  getUserByUsernameDb,
  createSellerDb,
  getSellerByEmailDb,
  getAllSellersDb,
  getSellerByUsernameDb,
} = require("../db/user.db");
const { UnauthenticatedError } = require("../errors");

class UserService {
  createUser = async (user) => {
    try {
      return await createUserDb(user);
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };
  getUserByEmail = async (email) => {
    try {
      const user = await getUserByEmailDb(email);
      return user;
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };
  getUserByUsername = async (username) => {
    try {
      const user = await getUserByUsernameDb(username);
      return user;
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };
  getAllUsers = async () => {
    try {
      return await getAllUsersDb();
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };

  createSeller = async (seller) => {
    try {
      return await createSellerDb(seller);
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };
  getSellerByEmail = async (email) => {
    try {
      const seller = await getSellerByEmailDb(email);
      return seller;
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };
  getSellerByUsername = async (username) => {
    try {
      const seller = await getSellerByUsernameDb(username);
      return seller;
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };
  getAllSellers = async () => {
    try {
      return await getAllSellersDb();
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };
}

module.exports = new UserService();
