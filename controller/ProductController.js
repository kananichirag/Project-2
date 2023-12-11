const slugify = require("slugify");
const multer = require("multer");
const admin = require("firebase-admin");
const ProductModal = require("../models/ProductModal");
const fs = require("fs");
const serviceAccount = require("../e-commerce-26294-firebase-adminsdk-gvcno-28031cdab0.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const CreateProduct = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;

    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required.!!!" });
      case !description:
        return res.status(500).send({ error: "description is Required.!!!" });
      case !price:
        return res.status(500).send({ error: "price is Required.!!!" });
      case !quantity:
        return res.status(500).send({ error: "quantity is Required.!!!" });
      case !category:
        return res.status(500).send({ error: "category is Required.!!!" });
      case photo && photo.size > 2000000:
        return res.status(500).send({ error: "Photo sixze less than 2mb" });
    }
    const product = new ProductModal({ ...req.fields, slug: slugify(name) });
    if (photo) {
      //   const storageRef = admin
      //     .storage()
      //     .bucket("e-commerce-26294.appspot.com")
      //     .file(photo.originalname);

      //   await storageRef.createWriteStream().end(file.buffer);

      //   const downloadUrl = await storageRef.getSignedUrl({
      //     action: "read",
      //     expires: "01-01-2030", // Set an appropriate expiration date
      //   });
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    res.status(200).send({
      success: true,
      msg: "Product Created Successfully.!!!",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      msg: "Error to Creating Product.!!!",
    });
  }
};

const GetAllProduct = async (req, res) => {
  try {
    const products = await ProductModal.find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      TotalCount: products.length,
      msg: "All Product List..!!!",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error to Get all Products..!!!",
      error,
    });
  }
};

const GetSingleProduct = async (req, res) => {
  try {
    const product = await ProductModal.findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      msg: "Product Got",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error to Get single Products..!!!",
      error,
    });
  }
};

const GetProductPhoto = async (req, res) => {
  try {
    const product = await ProductModal.findById(req.params.pid).select("photo");
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error to Get Products Photo..!!!",
      error,
    });
  }
};

const DeleteProduct = async (req, res) => {
  try {
    await ProductModal.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      msg: "Product Deleted..!!!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error to Delete Product..!!!",
      error,
    });
  }
};

const UpdateProduct = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;

    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required.!!!" });
      case !description:
        return res.status(500).send({ error: "description is Required.!!!" });
      case !price:
        return res.status(500).send({ error: "price is Required.!!!" });
      case !quantity:
        return res.status(500).send({ error: "quantity is Required.!!!" });
      case !category:
        return res.status(500).send({ error: "category is Required.!!!" });
      case photo && photo.size > 2000000:
        return res.status(500).send({ error: "Photo sixze less than 2mb" });
    }
    const product = await ProductModal.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    res.status(200).send({
      success: true,
      msg: "Product Updated Successfully.!!!",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error to Update Product..!!!",
      error,
    });
  }
};

module.exports = {
  CreateProduct,
  GetAllProduct,
  GetSingleProduct,
  GetProductPhoto,
  DeleteProduct,
  UpdateProduct,
};
