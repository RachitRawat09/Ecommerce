const asyncHandler=require('express-async-handler');
const Product=require('../models/productModel');
const APIFunctionality = require('../utils/apiFunctionality');

// http://localhost:8080/api/v1/product/683441fdb6354f420268822c?keyword=shirt

const createProducts=asyncHandler(async(req,res)=>{
    
    // const {name,description,price,ratings,image,category,stock,numOfReviews,reviews,createdAt}
    const product = await Product.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
    
})

const getAllProducts=asyncHandler(async(req,res)=>{
    console.log(req.query);
    
    const APIFunctionality= new APIFunctionality(Product.find(),req.query)
    
    const Products=await Product.find();
    res.status(200).json(Products);
})


const updateProduct =asyncHandler(async (req,res)=>{
    
     let product = await Product.findById(req.params.id)
     if(!product){
        return res.status(500).jason({
            status:false,
            message:"Product not found"
        })
     }
     product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
     })
     res.status(200).json({
        success:true,
        product
     })
})

const deleteProduct = asyncHandler(async(req,res)=>{
    let product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            status:false,
            message:"Product not found"
        })
    }
    product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    })
})

const getSingleProduct = asyncHandler( async (req, res) => {
    let product =await  Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            status:false,
            message:"Product not found"
        })
    }
    product=await  Product.findById(req.params.id);
    res.status(200).json({
        success:true,
        product
    }) 
    
})

module.exports = {createProducts,getSingleProduct,getAllProducts,updateProduct,deleteProduct}
