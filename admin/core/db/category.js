const mongoose = require('mongoose')
const schema = mongoose.Schema

const Userschema = new schema({

        category: {
            type:String,
        },
       
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const CategoryModel = mongoose.model('category', Userschema )
module.exports = {
    CategoryModel
}