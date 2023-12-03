const { ProductModel } = require("../../../admin/core/db/product");
const { handleError } = require("../../core/utils");


const userretriveallproductController = async (req, res, next) => {
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
const userretrivesingleproductController = async (req, res, next) => {
    try {
        const {productid} = req.body
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
  

module.exports = {
    userretrivesingleproductController ,  userretriveallproductController
  }