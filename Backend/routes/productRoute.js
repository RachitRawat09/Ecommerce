const express = require('express');
const router = express.Router();
const {getSingleProduct , createProducts, getAllProducts, updateProduct, deleteProduct}=require('../controller/productController')


 
router.route('/products').post(createProducts).get(getAllProducts)
router.route('/product/:id').put(updateProduct ).delete(deleteProduct).get(getSingleProduct)

module.exports= router;