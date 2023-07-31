const userSchema = require('../model/UserModel');

const getAllUsers = (req,res)=>{

    userSchema.find().then((data)=>{
        res.status(200).json({
            data:data,
            message:"All users fetched successfully",
            flag:1
        })
    }).catch((err)=>{
        res.status(500).json({
            message:"Error in fetching users",
            flag:0
        })
    })

}

module.exports ={
    getAllUsers
}