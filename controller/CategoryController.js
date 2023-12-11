const CategoryModal = require("../models/Category");
const slugify = require("slugify");
const CreateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ msg: "Name is required.!!!" });
    }

    const existingCategory = await CategoryModal.findOne({ name });
    if (existingCategory) {
      return res.status(401).send({
        success: false,
        msg: "Category Already Exits.!!!",
      });
    }

    const category = await new CategoryModal({
      name,
      slug: slugify(name),
    }).save();

    res.status(201).send({
      success: true,
      msg: "New Category Created.!!!",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      msg: "Error in Creacting Category.!!!",
    });
  }
};

const UpdateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const category = await CategoryModal.findByIdAndUpdate(
      id,
      {
        name,
        slug: slugify(name),
      },
      { new: true }
    );

    res.status(201).send({
      success: true,
      msg: "Category Updated Successfully.!!!",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      msg: "Error in Updateing Category.!!!",
    });
  }
};

const Getall = async (req, res) => {
  try {
    const category = await CategoryModal.find({});
    res.status(200).send({
      success: true,
      msg: "All Category List.!!!",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      msg: "Error to Get Category.!!!",
    });
  }
};

const GetSingle = async (req, res) => {
  try {
    const category = await CategoryModal.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      msg: "Single Category !!!",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      msg: "Error to Get Single Category.!!!",
    });
  }
};

const DeleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await CategoryModal.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      msg: "Category Deleted.!!!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error to Deleting Category.!!!",
      error,
    });
  }
};

module.exports = {
  CreateCategory,
  UpdateCategory,
  Getall,
  GetSingle,
  DeleteCategory,
};
