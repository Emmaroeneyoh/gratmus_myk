const { admincreatebrandController, adminupdatebrandController, AdminretrieveallbrandController, AdmindeletebrandController } = require("../app/controller/brand");
const { admin_check_token } = require("../core/authorization");
const { adminValidation } = require("../core/validation/auth");
const { admincreatebrandValidation, adminupdatebrandValidation, adminretrievedeletebrandValidation } = require("../core/validation/brand");


const router = require("express").Router();

router.post(
  "/create/brand",
  admincreatebrandValidation,
  admin_check_token,
  admincreatebrandController
);
router.post(
  "/update/brand",
  adminupdatebrandValidation,
  admin_check_token,
  adminupdatebrandController
);
router.post(
  "/retrieve/brand",
  adminValidation,
  admin_check_token,
  AdminretrieveallbrandController
);
router.post(
  "/delete/brand",
  adminretrievedeletebrandValidation,
  admin_check_token,
  AdmindeletebrandController
);

module.exports = router