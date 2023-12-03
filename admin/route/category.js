const { admincreatecategoryController, adminupdatecategoryController, AdminretrieveallcategoryController, AdmindeletecategoryController } = require("../app/controller/category");
const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validation/auth");
const { admincreatecategoryValidation, adminupdatecategoryValidation, adminretrievedeletecategoryValidation } = require("../core/validation/category");


const router = require("express").Router();

router.post(
  "/create/category",
  admincreatecategoryValidation,
  admin_check_token,
  admincreatecategoryController
);
router.post(
  "/update/category",
  adminupdatecategoryValidation,
  admin_check_token,
  adminupdatecategoryController
);
router.post(
  "/retrieve/category",
  adminValidation,
  admin_check_token,
  AdminretrieveallcategoryController
);
router.post(
  "/delete/category",
  adminretrievedeletecategoryValidation,
  admin_check_token,
  AdmindeletecategoryController
);

module.exports = router