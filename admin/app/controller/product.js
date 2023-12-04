const { ProductModel } = require("../../core/db/product");
const { handleError } = require("../../core/utils");
const {
  createProductModel,
  updateProductModel,
  adminproductaddimageModel,
  adminproductremoveimageModel,
  adminproductremovefeatureModel,
  adminproductaddfeatureModel,
} = require("../model/product");

const createProductController = async (req, res, next) => {
  const {
    productname,

    category,
    coverimage,
    productmodel,
    free_delivery,
    productprice,
    discountprice,
    productbrand,
    special_features,
    productdescription,
    images,
    length,
    breadth,
    weight,
    quantity,
  } = req.body;
  const name = productname.toLowerCase();
  const price = productprice;
  const brand = productbrand;
  const model = productmodel;
  const description = productdescription;
  const productarea = length * breadth;
  try {
    const data = {
      name,
      price,
      brand,
      model,
      images,
      description,
      category,
      special_features,
      productarea,
      weight,
      length,
      breadth,
      quantity,
      coverimage,
      free_delivery,
      discountprice,
    };

    let trainee = await createProductModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const updateProductController = async (req, res, next) => {
  const {
    productname,
    productid,
    category,
    coverimage,
    productmodel,
    free_delivery,
    productprice,
    discountprice,
    productbrand,

    productdescription,
    length,
    breadth,
    weight,
    quantity, special_features
  } = req.body;
  const name = productname.toLowerCase();
  const price = productprice;
  const brand = productbrand;
  const model = productmodel;
  const description = productdescription;
  const productarea = length * breadth;
  try {
    const data = {
      name,
      price,
      brand,
      model,
      description,
      category,
      productid,
      productarea,
      weight,
      length,
      breadth,
      quantity,
      coverimage,
      free_delivery,
      discountprice, special_features
    };

    let trainee = await updateProductModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const AdminretrivesingleproductController = async (req, res, next) => {
  try {
    const { productid } = req.body;
    let comment = await ProductModel.findById(productid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "product retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const AdmindeleteproductController = async (req, res, next) => {
  try {
    const { productid } = req.body;
    let comment = await ProductModel.findByIdAndDelete(productid);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "product deleted",
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const AdminretriveallproductController = async (req, res, next) => {
  try {
    let comment = await ProductModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "product retrieved",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const adminproductaddimageController = async (req, res, next) => {
  const { productid, url } = req.body;
  try {
    const data = {
      productid,
      url,
    };

    let trainee = await adminproductaddimageModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminproductremoveimageController = async (req, res, next) => {
  const { productid, urlid } = req.body;
  try {
    const data = {
      productid,
      urlid,
    };

    let trainee = await adminproductremoveimageModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const adminproductaddfeatureController = async (req, res, next) => {
  const { productid, feature } = req.body;
  try {
    const data = {
      productid,
      feature,
    };

    let trainee = await adminproductaddfeatureModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const adminproductremovefeatureController = async (req, res, next) => {
  const { productid, featureid } = req.body;
  try {
    const data = {
      productid,
      featureid,
    };

    let trainee = await adminproductremovefeatureModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  createProductController,
  updateProductController,
  AdminretrivesingleproductController,
  AdminretriveallproductController,
  adminproductaddfeatureController,
  adminproductaddimageController,
  adminproductremoveimageController,
  adminproductremovefeatureController, AdmindeleteproductController
};
