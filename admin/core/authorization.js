const jwt = require('jsonwebtoken');
const { adminJWT } = require('../../general/core/utils');
const { AdminModel } = require('./db/admin');
// const { isValidObjectId, userjwt } = require('./utils');



const admin_check_token = async (req, res, next) => {
    let admin = req.body.adminid
    // // const checkid = isValidObjectId(admin)
    // if (!checkid) {
    //     return res.status(400).json({
    //               status_code: 400,
    //               status: false,
    //               message: "id is invalid type",
              
    //               error: "id is invalid type",
    //             });
    // }
    const checkadmin = await AdminModel.findById(admin)
  if (!checkadmin) {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: "admin does not exist",
  
      error: "admin does not exist",
    });
  }
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
          token = req.headers.authorization.split(' ')[1] // gotten the token, now we will decode it

          const decoded = jwt.verify(token, adminJWT)
          const adminid = decoded.admin
        if (admin != adminid) {
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
         }

       next()
      } catch (error) {
        console.log('error')
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
      }
    }
    if (!token) {
        return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
    }
}



module.exports = {
    admin_check_token 
}