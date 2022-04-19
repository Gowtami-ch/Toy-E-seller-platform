const { BadRequestError } = require("../errors");

// models required
const Product = require("../models/product");
const Buyer = require("../models/buyer");
const Review = require("../models/review");

const getFavourites = async (req, res) => {
  const { _id } = req.buyer;
  const favProducts = await Buyer.findById(_id).populate("favouriteProducts");

  if (!favProducts) {
    throw new BadRequestError("There is No Such Buyer");
  }
  res.status(200).json({
    success: "true",
    data: favProducts.toJSON({ virtuals: true }).favouriteProducts,
  });
};

const addToFavourites = async (req, res) => {
  const { productId } = req.body;
  const { _id } = req.buyer;
  const product = await Product.findById(productId);
  if (!product) {
    throw new BadRequestError("No Such Product");
  }
  const productAddedToFavourites = await Buyer.findByIdAndUpdate(_id, {
    $push: { favouriteProducts: productId },
  });

  if (!productAddedToFavourites) {
    throw new BadRequestError("There Was Some Error");
  }

  //   Return on a test basis
  res.status(200).json({ success: "true", data: productAddedToFavourites });
};

const removeFromFavourites = async (req, res) => {
  const { productId } = req.body;
  const { _id } = req.buyer;
  const product = await Product.findById(productId);
  if (!product) {
    throw new BadRequestError("No Such Product");
  }
  const productAddedToFavourites = await Buyer.findByIdAndUpdate(_id, {
    $pull: { favouriteProducts: productId },
  });

  if (!productAddedToFavourites) {
    throw new BadRequestError("There Was Some Error");
  }

  //   Return on a test basis
  res.status(200).json({ success: "true", data: productAddedToFavourites });
};

const getAllProducts = async (req, res) => {
  const allProducts = await Product.find({});

  res.status(200).json({ success: "true", data: allProducts });
};

const getProductById = async (req, res) => {
  // Very Important Controller -> Example for multilevel selective
  // population

  const { productId } = req.query;
  const product = await Product.findOne({ _id: productId }).populate({
    path: "reviews",
    populate: { path: "buyer", select: "username" },
  });
  if (!product) {
    throw new BadRequestError(
      "There Exists No Such Product. Please Check Again"
    );
  }
  res.status(200).json({
    success: "true",
    data: product.toJSON({ virtuals: true }),
  });
};

const createReview = async (req, res) => {
  const { productId, content } = req.body;
  const { _id } = req.buyer;

  const product = await Product.findById(productId);
  if (!product || !_id) {
    throw new BadRequestError(
      "There Exists No Such Product. Please Check Again"
    );
  }

  const exists = await Review.find({ buyer: _id, product: productId });
  if (exists.length != 0) {
    throw new BadRequestError("There Already Exists A Review From You.");
  }

  const newReview = { content, buyer: _id, product: productId };

  await Review.create(newReview);
  res.status(200).json({ success: "true", data: newReview });
};
module.exports = {
  createReview,
  getFavourites,
  addToFavourites,
  getAllProducts,
  getProductById,
  removeFromFavourites,
};
