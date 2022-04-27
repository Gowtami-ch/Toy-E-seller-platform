const {
  createUserDb,
  getUserByEmailDb,
  getAllUsersDb,
  getUserByUsernameDb,
} = require("../db/user.db");
const { ErrorHandler } = require("../helpers/error");

class UserService {
  createUser = async (user) => {
    try {
      return await createUserDb(user);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getUserByEmail = async (email) => {
    try {
      const user = await getUserByEmailDb(email);
      return user;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getUserByUsername = async (username) => {
    try {
      const user = await getUserByUsernameDb(username);
      return user;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getAllUsers = async () => {
    try {
      return await getAllUsersDb();
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
}

module.exports = new UserService();
