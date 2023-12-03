const { createProductController, updateProductController, AdminretrivesingleproductController, AdminretriveallproductController, AdmindeleteproductController, adminproductaddimageController, adminproductremoveimageController, adminproductaddfeatureController, adminproductremovefeatureController } = require("../app/controller/product");
const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validation/auth");
const { admincreateProductValidation, adminupdateProductValidation, admindeleteretrieveProductValidation, addproductimageValidation, addproductfeatureValidation, removeproductfeatureValidation, removeproductimageValidation } = require("../core/validation/product");


const router = require("express").Router();

router.post(
  "/create/product",
  admincreateProductValidation,
  admin_check_token,
  createProductController
);

router.post(
  "/update/product",
  adminupdateProductValidation,
  admin_check_token,
  updateProductController
);

router.post(
  "/delete/product",
  admindeleteretrieveProductValidation,
  admin_check_token,
  AdmindeleteproductController
);
router.post(
  "/retrieve/single/product",
  admindeleteretrieveProductValidation,
  admin_check_token,
  AdminretrivesingleproductController
);

router.post(
  "/retrieve/all/product",
  adminValidation,
  admin_check_token,
  AdminretriveallproductController
);


router.post(
  "/add/product/image",
  addproductimageValidation,
  admin_check_token,
  adminproductaddimageController
);
router.post(
  "/remove/product/image",
  removeproductimageValidation,
  admin_check_token,
  adminproductremoveimageController
);
router.post(
  "/add/product/feature",
  addproductfeatureValidation,
  admin_check_token,
  adminproductaddfeatureController
);
router.post(
  "/remove/product/feature",
  removeproductfeatureValidation,
  admin_check_token,
  adminproductremovefeatureController
);

module.exports = router