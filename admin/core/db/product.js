const mongoose = require('mongoose')
const schema = mongoose.Schema

const Productschema = new schema({
 
        name: {
            type:String,
        },
        selling_price:{
            price: {
                type:Number,
            },
            discount_price: {
                type:Number,
            }
        },
        quantity:{
            type:Number
        },
        sold:{
            type:Number , default : 0
        },
        dimension:{
            length:{
                type:Number
            },  
            breadth:{
                type:Number
            },
            area:{
                type:Number
            },
            weight:{
                type:Number
            },
        },
        brand:{
            type:  mongoose.Schema.Types.ObjectId,
            ref:'brand'
        },
        model:{
            type:  String,
        },
        category:{
            type:  mongoose.Schema.Types.ObjectId,
            ref:'category'
        },
        cover_image:{
            type:  String,
        },
        images: {
            default: [],
            type: [
                {
                   
                    image: {
                        type:  String,
                    }
                }
            ]
        },
        special_features: {
            default: [],
            type: [
                {}
            ]
        },
        description:{
            type:String
        },
        free_delivery:{
            type:Boolean , default : false
        },
       
       
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const ProductModel = mongoose.model('Product', Productschema )
module.exports = {
    ProductModel
}