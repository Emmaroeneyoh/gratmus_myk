const { brandModel } = require("../../core/db/brand");
const { handleError } = require("../../core/utils");
const { admincreatebrandModel, adminupdatebrandModel } = require("../model/brand");


const admincreatebrandController = async (req, res, next) => {
  const { brand  , brandurl } = req.body;
  try {
    const brandname = brand.toLowerCase();
    const checkcat = await brandModel.findOne({ brand : brandname });
    if (checkcat) {
      return res.status(400).json({
        status_code: 400,
        status: true,
        message: "brand already exist",
      });
    }
    const data = {
      brandname , brandurl
    };
    let catdata = await admincreatebrandModel(data, res);
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

const adminupdatebrandController = async (req, res, next) => {
  const { brandid, brand , brandurl } = req.body;
  try {
    const brandname = brand.toLowerCase();
    const checkcat = await brandModel.findOne({ brand: brandname });
    if (checkcat) {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "brand already exist",
      });
    }
    const data = {
     brandid , brandurl , brandname
    };
    let comment = await adminupdatebrandModel(data, res);
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
const AdminretrieveallbrandController = async (req, res, next) => {
  try {
    let comment = await brandModel.find();
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
const AdmindeletebrandController = async (req, res, next) => {
  try {
    const { brandid } = req.body;
    let comment = await brandModel.findByIdAndDelete(brandid);
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
  AdmindeletebrandController,
  AdminretrieveallbrandController,
  adminupdatebrandController, admincreatebrandController
};
