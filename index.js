/* Importing Packages*/
require("express-async-errors");
const express = require("express");
const app = express();

const connectDb = require("./config/index");
require("dotenv").config();

/* Packages for Image Uploading */
const fileUpload = require("express-fileupload");
// USE V2
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

/* Error Handler and Route Handler MiddleWare */
const not_found = require("./middleware/not-found");
const error_handler = require("./middleware/error-handler");

const port = process.env.PORT || 5000;

const path = require("path");

/* Cors For External Api support */
const cors = require("cors");

/* Importing Routers For Api's of various modules here */
const loginRouter = require("./routes/login");

const registrationRouter = require("./routes/registration");

const cartRouter = require("./routes/cart");

const orderRouter = require("./routes/order");

const paymentRouter = require("./routes/payment");

const productRouter = require("./routes/product");

const usersRouter = require("./routes/users");

/* modules for authentication */
const { checkUser } = require("./controllers/home.controller");
const auth = require("./middleware/auth");

/* Using MiddleWare */
app.use(express.json());
app.use(cors());

/* static file serving */
const buildPath = path.join(__dirname, "E-Seller", "build");

app.use(express.static(buildPath));

app.use(fileUpload({ useTempFiles: true }));

/* Using Api Routes Using Routers */
app.use("/api/v1/login", loginRouter);

app.use("/api/v1/registration", registrationRouter);

app.use("/api/v1/cart", cartRouter);

app.use("/api/v1/order", orderRouter);

app.use("/api/v1/payment", paymentRouter);

app.use("/api/v1/product", productRouter);

app.use("/api/v1/users", usersRouter);

app.get("/api/v1", auth, checkUser);

/* Redirecting get requests to React Router */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "E-Seller/build/index.html"));
});

/* Error Paths */
app.use(not_found);
app.use(error_handler);

const start = async () => {
  try {
    await connectDb.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
