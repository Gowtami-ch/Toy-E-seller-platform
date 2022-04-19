const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const Buyer = require("../models/buyer");

const getProfile = async (req, res) => {
  const { _id } = req.buyer;

  const buyer = await Buyer.findOne({ _id });

  if (!buyer) {
    throw new BadRequestError("No Such Buyer");
  }
  const profile = {
    BirthDay: buyer.birthday,
    Gender: buyer.gender,
    Hobbies: buyer.hobbies,
    Keywords: buyer.keywords,
    BuyerName: buyer.buyername,
    EmailID: buyer.email,
    Phone: buyer.phone,
    Interests: buyer.interests,
    About: buyer.about,
  };

  return res.status(StatusCodes.OK).json({ status: "success", data: profile });
};

const postProfile = async (req, res) => {
  const { BirthDay, Gender, Hobbies, Interests, Phone, About } = req.body;
  const { _id } = req.buyer;

  await Buyer.findByIdAndUpdate(_id, {
    $set: {
      birthday: BirthDay,
      gender: Gender,
      hobbies: Hobbies,
      interests: Interests,
      phone: Phone,
      about: About,
    },
  });
  res.status(StatusCodes.OK).json({
    status: "success",
    data: { BirthDay, Gender, Hobbies, Interests, Phone, About },
  });
};

const getProductDetails = async (req, res) => {
  const { _id } = req.buyer;
  const buyer = await Buyer.findById(_id);

  if (!buyer) {
    throw new BadRequestError("No Such Buyer Exists");
  }

  const favProductsList = buyer.favouriteProducts;

  res.status(200).json({ success: "true", data: favProductsList });
};

module.exports = { postProfile, getProfile, getProductDetails };
