const mongoose=require("mongoose");
const bcrypt=require("bcrypt")
const User=require("../models/UserSchema")
module.exports.login=async(req,res,next)=>{
    const {email,password}=req.body;
    const checkEmail=await User.findOne({email});
    if(!checkEmail){
        return res.json({msg:"This email is not Register",status:false})
    }
    const checkPassword=await bcrypt.compare(password,checkEmail.password)
    if(!checkPassword){
        return res.json({msg:"Username and Password is incorrect",status:false});
    }
  delete checkEmail;
res.json({msg:"Login success",status:true})

}
module.exports.registeration=async(req,res,next)=>{
    try{
        const {username,email,password}=req.body;
        const UsernameExist=await User.findOne({username});
        if(UsernameExist){
        return res.json({msg:"Username is already exist",status:false})
        }
        const emailExist=await User.findOne({email});
        if(emailExist){
           return res.json({msg:"Email is already registered",status:false})
        }
        
            const hashpassword=await bcrypt.hash(password,10);
            const userSet=await User.create({
                username,
                email,
                password:hashpassword
            })
            delete userSet;
            res.status(200).json({status:true,msg:"User is Created"});
    }catch(e){
        next(e);
    }
    
    
}