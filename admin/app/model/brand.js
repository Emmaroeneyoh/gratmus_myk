const { brandModel } = require("../../core/db/brand");

const admincreatebrandModel = async (data, res) => {
  try {
    const {   brandname , brandurl } = data;
    const form = await new brandModel({
      brand : brandname , brandurl
    });

    const savedcat =    await form.save();
    

    return  savedcat;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const adminupdatebrandModel = async (data, res) => {
  try {
    const { brandid , brandname , brandurl } = data;
    const updateaddress = await brandModel.findByIdAndUpdate(brandid, {
      $set: {
        brand:brandname ,  brandurl
      },
    });
    return updateaddress;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};


module.exports = {
    admincreatebrandModel ,  adminupdatebrandModel
};
