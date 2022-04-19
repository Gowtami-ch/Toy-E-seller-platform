const Product = require("../models/product");

const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const getAllProducts = async (req, res) => {
  const { _id } = req.seller;
  if (!_id) {
    throw new BadRequestError("No Id was recieved");
  }
  const products = await Product.find({ seller: _id });
  if (!products) {
    throw new BadRequestError("No products created by the seller");
  }

  res.status(200).json({ success: "true", data: products });
};

const getProductById = async (req, res) => {
  const { _id } = req.seller;
  const { productId } = req.query;
  if (!_id || !productId) {
    throw new BadRequestError("No Such Item Exists");
  }
  const product = await Product.findById(productId);
  if (!product) {
    throw new BadRequestError("No Such Product Exists");
  }
  if (product.seller != _id) {
    throw new UnauthenticatedError(
      "You Are Not Authorized to Access This Product."
    );
  }

  res.status(200).json({ success: "true", data: product });
};

const removeProductById = async (req, res) => {
  const { _id } = req.seller;
  const { productId } = req.body;
  if (!_id || !productId) {
    throw new BadRequestError("No Such Item Exists");
  }
  const product = await Product.findById(productId);
  if (!product) {
    throw new BadRequestError("No Such Product Exists");
  }
  if (product.seller != _id) {
    throw new UnauthenticatedError(
      "You Are Not Authorized to Remove This Product."
    );
  }
  await Product.findByIdAndRemove(productId);
  res.status(200).json({ success: "true", data: product });
};

const patchProductById = async (req, res) => {
  const { _id } = req.seller;
  const updatedProduct = req.body;
  if (!_id) {
    throw new UnauthenticatedError("No Such Seller");
  }
  if (!updatedProduct) {
    throw new BadRequestError("No Info to update with");
  }
  //   Checking for event and if the current organization is the owner
  const product = await Product.findById(updatedProduct._id);
  if (!product) {
    throw new BadRequestError("No Such Product Exists");
  }
  if (product.seller != _id) {
    throw new UnauthenticatedError(
      "You Are Not Authorized to Remove This Product."
    );
  }

  await Product.findByIdAndUpdate(updatedProduct._id, updatedProduct);
};

const createProduct = async (req, res) => {
  const { _id } = req.seller;

  let result = {};
  if (req.files) {
    result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
      use_filename: true,
      folder: "file-upload",
    });
    fs.unlinkSync(req.files.image.tempFilePath);
  }

  const newProduct = {
    ...req.body,
    seller: _id,
    productImage: result.secure_url,
  };

  const created = await Product.create(newProduct);
  if (!created) {
    throw new BadRequestError("Product Not Created");
  }

  res.status(200).json({ success: true, data: created });
};

/* const createAnnouncement = async (req, res) => {
  const { _id } = req.organizer;
  const { content, eventId } = req.body;

  if (!_id || !eventId) {
    throw new BadRequestError("No Such Item Exists");
  }
  const event = await Event.findById(eventId);

  if (!event) {
    throw new BadRequestError("No Such Event Exists");
  }
  if (event.organizer != _id) {
    throw new UnauthenticatedError(
      "You Are Not Authorized to Access This Event."
    );
  }

  const returnValue = await Event.findByIdAndUpdate(eventId, {
    $push: { announcements: { content } },
  });

  res.status(200).json({ success: "true", data: returnValue });
};
*/

module.exports = {
  // uploadImage,
  createProduct,
  getAllProducts,
  getProductById,
  removeProductById,
  patchProductById,
  // createAnnouncement,
};
