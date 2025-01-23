const {registeration,login} =require('../controllers/UserDetails') 
let router=require("express").Router();
router.post('/register',registeration)
router.post('/login',login);
module.exports=router;