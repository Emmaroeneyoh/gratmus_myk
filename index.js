const express = require("express");
//using the env
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const cors = require("cors");
const { coonectdb } = require("./general/core/utils");
const app = express();


//user 
const userauth = require('./user/route/auth')
const userprofile = require('./user/route/profile')
const userproduct = require('./user/route/product')

//admin
const adminauth = require('./admin/route/auth')
const adminproduct = require('./admin/route/product')
const admincategory = require('./admin/route/category')
const adminbrand = require('./admin/route/brand')


coonectdb()
app.use(cors());
//applying our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const user = '/user'
const admin = '/admin'

//user
app.use(user , userauth)
app.use(user , userprofile)
app.use(user , userproduct)


//admin
app.use(admin , adminauth)
app.use(admin , adminproduct)
app.use(admin , admincategory)
app.use(admin , adminbrand)

//error handler
app.use((req, res, next) => {
  const error = new Error("api not found");
  error.status = 404;
  res.status(404).json({
    status_code: 404,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.status(500).json({
    status_code: 500,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

const port =  5000;
app.listen(port, () => {
  console.log("server connected", port);
});
