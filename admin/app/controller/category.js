const { CategoryModel } = require("../../core/db/category");
const {
  admincreatecategoryModel,
  adminupdatecategoryModel,
} = require("../model/category");

const admincreatecategoryController = async (req, res, next) => {
  const { category } = req.body;
  try {
    const cat = category.toLowerCase();
    const checkcat = await CategoryModel.findOne({ category: cat });
    if (checkcat) {
      return res.status(400).json({
        status_code: 400,
        status: true,
        message: "category already exist",
        data: comment,
      });
    }
    const data = {
      cat,
    };
    let catdata = await admincreatecategoryModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "category created",
      data: catdata,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const adminupdatecategoryController = async (req, res, next) => {
  const { categoryid, category } = req.body;
  try {
    const cat = category.toLowerCase();
    const checkcat = await CategoryModel.findOne({ category: cat });
    if (checkcat) {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "category already exist",
      });
    }
    const data = {
      categoryid,
      cat,
    };
    let comment = await adminupdatecategoryModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "customer successfully retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const AdminretrieveallcategoryController = async (req, res, next) => {
  try {
    let comment = await CategoryModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "All category retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const AdmindeletecategoryController = async (req, res, next) => {
  try {
    const { categoryid } = req.body;
    let comment = await CategoryModel.findByIdAndDelete(categoryid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "category deleted",
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  AdmindeletecategoryController,
  AdminretrieveallcategoryController,
  adminupdatecategoryController, admincreatecategoryController
};
