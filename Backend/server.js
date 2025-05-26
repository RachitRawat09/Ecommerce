const express = require('express');
const app=express();
const product=require('./routes/productRoute.js')
const dotenv = require('dotenv').config();
const dbConnection = require('./config/db.js');
const errorHandler = require('./middleware/errorHandler.js');
const port =process.env.PORT||8081;
dbConnection();
app.use(express.json());
app.use("/api/v1",product)
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})
 