const joi = require("joi");
const { handleError } = require("../utils");

const admincreateProductValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    adminid: joi.string().required(),
    productname: joi.string().required(),
    category: joi.string().required(),
    productprice: joi.number().required(),
    discountprice: joi.number().required(),
    productbrand: joi.string().required(),
    productmodel: joi.string().required(),
    coverimage: joi.string().required(),
    images: joi.array().required(),
    special_features: joi.array().required(),
    free_delivery: joi.boolean().required(),
    productdescription: joi.string().required(),

    length: joi.number().required(),
    breadth: joi.number().required(),
    weight: joi.number().required(),
    quantity: joi.number().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const adminupdateProductValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    productname: joi.string().required(),
    productid: joi.string().required(),
    adminid: joi.string().required(),
    category: joi.string().required(),
    productprice: joi.number().required(),
    discountprice: joi.number().required(),
    productbrand: joi.string().required(),
    productmodel: joi.string().required(),
    coverimage: joi.string().required(),
    free_delivery: joi.boolean().required(),
    productdescription: joi.string().required(),
    length: joi.number().required(),
    breadth: joi.number().required(),
    weight: joi.number().required(),
    quantity: joi.number().required(),
    special_features: joi.array().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const admindeleteretrieveProductValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    productid: joi.string().required(),
    adminid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const addproductimageValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    productid: joi.string().required(),
    url: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
const removeproductimageValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    productid: joi.string().required(),
    urlid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return  handleError(err)(res);
  }
  return next();
};
const addproductfeatureValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    productid: joi.string().required(),
    feature: joi.object().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return  handleError(err)(res);
  }
  return next();
};
const removeproductfeatureValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    productid: joi.string().required(),
    featureid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return  handleError(err)(res);
  }
  return next();
};

module.exports = {
  admincreateProductValidation,
  removeproductfeatureValidation,
  addproductfeatureValidation,
  removeproductimageValidation,
  addproductimageValidation,
  admindeleteretrieveProductValidation,
  adminupdateProductValidation,
};
