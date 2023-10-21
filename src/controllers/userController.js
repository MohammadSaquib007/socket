const userModel=require('../models/userModel')

const userRegistration= async function(req,res){

try{
const data=req.body
const createUser=await userModel.create(data)
res.status(201).send({status:true,messege:"user registration sucssefully",data:createUser})
}
catch(err){
    res.status(500).send({status:false,message:err.message})
}
}

const getUser=async function(req,res){

    try{
       

        let id = req.query.id;
if(id){
        const fetchUser=await userModel.find({_id:id})
        console.log(fetchUser)
        res.status(200).send({status:true,messege:fetchUser})
        if (!id) {
            const getUser=await userModel.find()
            res.status(200).send({status:true,messege:getUser})
        }

      

    }}
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}


module.exports={userRegistration,getUser}