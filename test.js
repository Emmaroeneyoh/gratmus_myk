const nodemailer = require("nodemailer");
const { appPassword } = require("../../../general/core/utils");
const { handleError } = require("../../core/utils");
// var API_KEY = mailgunAPI;
// var DOMAIN = mailgunDOMIAN;
var mailgun = require("mailgun-js")({
  apiKey: "c2efc90c-9b7376e5",
  domain: "sandbox2682fabc5a674862a61640dd89d0c2f8.mailgun.org",
});

const contactusCONTROLLER = async (req, res) => {
  const { name, companyname, phone, email, short_description } = req.body;
  try {
    //start of nodemailer
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "emmaroeneyoh@gmail.com",

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
        `;
    var mailOptions = {
      from: "emmaroeneyoh@gmail.com",
      to: `emmaroeneyoh@gmail.com`,
      subject: "CONTACT INFO",
      text: contactinfo,
      // html: data,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
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
const contactus2CONTROLLER = async (req, res) => {
  const { firstname, lastname, state, city, message, phone, email, subject } =
    req.body;
  try {
    //start of nodemailer
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "emmaroeneyoh@gmail.com",

        pass: appPassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const contactinfo = `
        FIRSTNAME : ${firstname} ,
        LASTNAME : ${lastname} ,
        STATE : ${state} ,
        CITY : ${city} ,
        PHONE : ${phone} ,
        EMAIL : ${email} ,
        MESSAGE : ${message} ,
        SUBJECT : ${subject} ,
        `;
    var mailOptions = {
      from: "special@mykcrimecontrol.com.ng",
      to: `emmanueleneyoh@gmail.com`,
      subject: "CONTACT INFO",
      text: contactinfo,
      // html: data,
    };

    sendMail = function (
      sender_email,
      receiver_email,
      email_subject,
      email_body
    ) {
      const data = {
        from: sender_email,
        to: receiver_email, 
        subject: email_subject,
          text: email_body,
        
      };
      console.log('test3 and')
      mailgun.messages().send(data, (error, body) => {
        console.log('test4')
        if (error) {
          console.log('this sis error', error);
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "mail not sent ",
            data : error
          });
      
        } else {
          console.log(body);
          return res.status(200).json({
            status_code: 200,
            status: true,
            message: "mail sent through",
          });
        }
      });
    };


    // var mailOptions = {
    //   from: "special@mykcrimecontrol.com.ng",
    //   to: `emmanueleneyoh@gmail.com`,
    //   subject: "CONTACT INFO",
    //   text: contactinfo,
    //   // html: data,
    // };
    //function to send the email
    var sender_email = "special@mykcrimecontrol.com.ng";
    var receiver_email = 'emmaroeneyoh@gmail';
    var email_subject =  'kkisj';
    var email_body = contactinfo;

    // User-defined function to send email
    sendMail(sender_email, receiver_email, email_subject, email_body);
    //end
//end of mailgun
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  contactusCONTROLLER,
  contactus2CONTROLLER,
};
