
const jwt = require('jsonwebtoken');
const { userjwt, adminJWT } = require('../../general/core/utils');

const age = 1 * 24 * 60 * 60;
const create_admin_token = (admin) => {
  return jwt.sign({ admin }, adminJWT, {
    expiresIn: age,
  });
};
const handleError = (err) => res => {
  return res.status(400).json({
    status_code: 400,
    status: false,
    message: err,
    data: [],
    error: err,
  });
}

module.exports = {
  create_admin_token ,  handleError
}