const { CategoryModel } = require("../../core/db/category");


const admincreatecategoryModel = async (data, res) => {
  try {
    const { cat } = data;
    const form = await new CategoryModel({
      category:cat
    });

    const savedcat =    await form.save();
    

    return  savedcat;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const adminupdatecategoryModel = async (data, res) => {
  try {
    const { categoryid , cat } = data;
    const updateaddress = await CategoryModel.findByIdAndUpdate(categoryid, {
      $set: {
        category:cat
      },
    });
    return updateaddress;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};


module.exports = {
    admincreatecategoryModel ,  adminupdatecategoryModel
};
