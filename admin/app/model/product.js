const { ProductModel } = require("../../core/db/product");

const createProductModel = async (data, res) => {
  try {
    const {
      name,
      price,
      brand,
      model,
      images,
      description,
      category,
      productarea,
      weight,
      length,
      breadth,
      quantity,
      coverimage,
      free_delivery,
      discountprice,
      special_features,
    } = data;

    const form = await new ProductModel({
      name,
      quantity,
      selling_price: { discountprice, price },
      brand,
      model,
      description,
      category,
      coverimage,
      free_delivery,
      special_features,
      images,
      dimension: {
        length,
        breadth,
        area: productarea,
        weight,
      },
    });
    const productDetails = await form.save();

    return productDetails;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const updateProductModel = async (data, res) => {
  try {
    const {
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
      discountprice,
    } = data;

    const updateproduct = await ProductModel.findByIdAndUpdate(productid, {
      $set: {
        name,
        quantity,
        selling_price: { discountprice, price },
        brand,
        model,
        description,
        category,
        coverimage,
        free_delivery,
        dimension: {
          length,
          breadth,
          area: productarea,
          weight,
        },
      },
    });

    return updateproduct;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};


const adminproductaddimageModel = async (data, res) => {
  try {
    const { url, productid } = data;
    const form = await ProductModel.findByIdAndUpdate(productid, {
      $push: {
        images: {image: url },
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const adminproductremoveimageModel = async (data, res) => {
  try {
    const { urlid, productid } = data;
    const form = await ProductModel.findByIdAndUpdate(productid, {
      $pull: {
        images: { _id: urlid },
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const adminproductaddfeatureModel = async (data, res) => {
  try {
    const { feature, productid } = data;
    const form = await ProductModel.findByIdAndUpdate(productid, {
      $push: {
        special_features: { feature },
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const adminproductremovefeatureModel = async (data, res) => {
  try {
    const { featureid, productid } = data;
    const form = await ProductModel.findByIdAndUpdate(productid, {
      $pull: {
        special_features: { _id: featureid },
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  createProductModel,
  updateProductModel,
  adminproductaddimageModel,
    adminproductremoveimageModel,
    adminproductremovefeatureModel,
    adminproductaddfeatureModel,
};
