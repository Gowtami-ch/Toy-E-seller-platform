const {
  getAllProductsDb,
  createProductDb,
  getProductDb,
  updateProductDb,
  deleteProductDb,
  getProductByNameDb,
} = require("../db/product.db");
const { UnauthenticatedError } = require("../errors");

class ProductService {
  getAllProducts = async (page) => {
    const limit = 12;
    const offset = (page - 1) * limit;
    try {
      return await getAllProductsDb({ limit, offset });
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };

  addProduct = async (data) => {
    try {
      return await createProductDb(data);
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };

  getProductById = async (id) => {
    try {
      const product = await getProductDb(id);
      if (!product) {
        throw new UnauthenticatedError(404, "product not found");
      }
      return product;
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };

  getProductByName = async (name) => {
    try {
      const product = await getProductByNameDb(name);
      if (!product) {
        throw new UnauthenticatedError(404, "product not found");
      }
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };

  updateProduct = async (data) => {
    try {
      const product = await getProductDb(data.id);
      if (!product) {
        throw new UnauthenticatedError(404, "product not found");
      }
      return await updateProductDb(data);
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };

  removeProduct = async (id) => {
    try {
      const product = await getProductDb(id);
      if (!product) {
        throw new UnauthenticatedError(404, "product not found");
      }
      return await deleteProductDb(id);
    } catch (error) {
      throw new UnauthenticatedError(error.statusCode, error.message);
    }
  };
}

module.exports = new ProductService();
