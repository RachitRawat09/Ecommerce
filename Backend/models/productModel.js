const mongoose=require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name "],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please enter product description "],
        trim:true
    },
    price:{
        type:Number,
        required:[true,"Please enter product price "],
        maxLength:[7,"price cant exceed 7 digits"]
    },
    ratings:{
        type:Number,
        default:0,
    },
    image:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }

        }
    ],
    category:{
        type:String,
        required:[true,"Please provide categry"]
    },
    stock:{
        type:Number,
        required:[true,"Please provide Product Stock"],
        maxLength:[5,"price cant exceed 5 digits"],
        default:1

    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }],
    createdAt:{
        type:Date,
        default:Date.Now
    }

})
module.exports=mongoose.model('Product',productSchema)