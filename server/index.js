let express=require("express");
let bodyParser=require("body-parser");
let app=express();
let mongoose=require("mongoose");
require("dotenv").config();
let port=process.env.PORT;
let user=require("./models/UserSchema");
//databse connection
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Databse is connected succesfully")
}).catch((e)=>{
    console.error(e)
})
let cors=require("cors");
//middleware
app.use(cors());
app.use(bodyParser.json());

app.listen(port,()=>{
console.log(`Server is running at port ${port}`)
})