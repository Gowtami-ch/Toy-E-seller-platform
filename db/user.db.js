const pool = require("../config");

const getAllUsersDb = async () => {
  const { rows: users } = await pool.query("select * from users");
  return users;
};

const createUserDb = async ({ username, password, email, fullname }) => {
  const { rows: user } = await pool.query(
    `INSERT INTO users(username, password, email, fullname) 
    VALUES($1, $2, $3, $4) 
    returning user_id, username, email, fullname, roles, address, city, state, country, created_at`,
    [username, password, email, fullname]
  );
  return user[0];
};

const getUserByIdDb = async (id) => {
  const { rows: user } = await pool.query(
    "select users.*, cart.id as cart_id from users left join cart on cart.user_id = users.user_id where users.user_id = $1",
    [id]
  );
  return user[0];
};
const getUserByUsernameDb = async (username) => {
  const { rows: user } = await pool.query(
    "select users.*, cart.id as cart_id from users left join cart on cart.user_id = users.user_id where lower(users.username) = lower($1)",
    [username]
  );
  return user[0];
};

const getUserByEmailDb = async (email) => {
  const { rows: user } = await pool.query(
    "select users.*, cart.id as cart_id from users left join cart on cart.user_id = users.user_id where lower(email) = lower($1)",
    [email]
  );
  return user[0];
};

const updateUserDb = async ({
  username,
  email,
  fullname,
  id,
  address,
  city,
  state,
  country,
}) => {
  const { rows: user } = await pool.query(
    `UPDATE users set username = $1, email = $2, fullname = $3, address = $4, city = $5, state = $6, country = $7 
      where user_id = $8 returning username, email, fullname, user_id, address, city, country, state`,
    [username, email, fullname, address, city, state, country, id]
  );
  return user[0];
};

const deleteUserDb = async (id) => {
  const { rows: user } = await pool.query(
    "DELETE FROM users where user_id = $1 returning *",
    [id]
  );
  return user[0];
};

const getAllSellersDb = async () => {
  const { rows: sellers } = await pool.query("select * from sellers");
  return sellers;
};

const createSellerDb = async ({ username, password, email, fullname }) => {
  const { rows: seller } = await pool.query(
    `INSERT INTO sellers(username, password, email, fullname) 
    VALUES($1, $2, $3, $4) 
    returning seller_id, username, email, fullname, roles, address, city, state, country, created_at`,
    [username, password, email, fullname]
  );
  return seller[0];
};

const getSellerByIdDb = async (id) => {
  const { rows: seller } = await pool.query(
    "select sellers.* where sellers.seller_id = $1",
    [id]
  );
  return seller[0];
};
const getSellerByUsernameDb = async (username) => {
  const { rows: seller } = await pool.query(
    "select sellers.* where lower(sellers.username) = lower($1)",
    [username]
  );
  return seller[0];
};

const getSellerByEmailDb = async (email) => {
  const { rows: seller } = await pool.query(
    "select sellers.* where lower(email) = lower($1)",
    [email]
  );
  return seller[0];
};
const updateSellerDb = async ({
  username,
  email,
  fullname,
  id,
  address,
  city,
  state,
  country,
}) => {
  const { rows: seller } = await pool.query(
    `UPDATE sellers set username = $1, email = $2, fullname = $3, address = $4, city = $5, state = $6, country = $7 
      where seller_id = $8 returning username, email, fullname, seller_id, address, city, country, state`,
    [username, email, fullname, address, city, state, country, id]
  );
  return seller[0];
};

const deleteSellerDb = async (id) => {
  const { rows: seller } = await pool.query(
    "DELETE FROM sellers where seller_id = $1 returning *",
    [id]
  );
  return seller[0];
};

module.exports = {
  getAllUsersDb,
  getUserByIdDb,
  getUserByEmailDb,
  updateUserDb,
  createUserDb,
  deleteUserDb,
  getUserByUsernameDb,
  getAllSellersDb,
  getSellerByIdDb,
  getSellerByEmailDb,
  updateSellerDb,
  createSellerDb,
  deleteSellerDb,
  getSellerByUsernameDb,
};
