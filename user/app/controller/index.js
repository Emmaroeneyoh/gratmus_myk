const nodemailer = require("nodemailer");
const { appPassword } = require("../../../general/core/utils");
const { handleError } = require("../../core/utils");

const contactusCONTROLLER = async (req, res) => {
    const { name , companyname , phone ,email , short_description } = req.body;
    try {
      //start of nodemailer
   var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'emmaroeneyoh@gmail.com',
  
      pass: appPassword,
    },
    tls: {
      rejectUnauthorized: false,
    },
   });
        const contactinfo = `
        NAME : ${name} ,
        COMPANYNAME : ${companyname} ,
        PHONE : ${phone} ,
        EMAIL : ${email} ,
        SHORT DESCRIPTION : ${short_description} ,
        `
    var mailOptions = {
        from: 'emmaroeneyoh@gmail.com',
        to: `emmaroeneyoh@gmail.com`,
        subject: 'CONTACT INFO',
      text: contactinfo
        // html: data,
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      //end of nodemailer
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "mail sent through",
        
        
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  
module.exports = {
    contactusCONTROLLER 
}