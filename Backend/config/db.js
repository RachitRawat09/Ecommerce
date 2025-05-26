const mongoose =require('mongoose')

const connectMongoDB=()=>{
    mongoose.connect(process.env.MONGO_URL).then((data)=>{
    console.log(`Mongodb Connected Succesfully`);
    
}).catch((err)=>{
    console.log(err.message);
    
})
}

module.exports=connectMongoDB
