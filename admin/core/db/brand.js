const mongoose = require('mongoose')
const schema = mongoose.Schema

const Userschema = new schema({

        brand: {
            type:String,
        },
        brandurl: {
            type:String,
        },
       
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const brandModel = mongoose.model('brand', Userschema )
module.exports = {
    brandModel
}