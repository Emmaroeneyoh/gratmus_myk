const mongoose = require('mongoose')
const schema = mongoose.Schema

const Userschema = new schema({

        email: {
            type:String,
        },
        password:{
            type:String
        },
        username:{
            type:String
        },
        firstname:{
            type:String
        },
        lastname:{
            type:String
        },
        phone:{
            type:String , default : ''
        },
      
        role:{
            type:String , default : ''
        },
       
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const AdminModel = mongoose.model('Admin', Userschema )
module.exports = {
    AdminModel
}