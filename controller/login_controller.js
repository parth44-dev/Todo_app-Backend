const LoginController = require('../model/login_schema');

exports.create_login = async (req,res) => {
    try{
        const createlogin = await LoginController.create(req.body);
        res.status(200).json({message:"Login created", Login_Datails: createlogin})
    }
    catch(err){
        console.log("login creation failed",err);
        res.status(500).json({error:"Internal server error"});
    }
};

exports.fetch_login = async (req,res) => {
    try{
        const fetchlogin = await LoginController.findById(req.params.id);
        if(!fetchlogin){
          return  res.status(404).json({message: "Not Found"});
        }
        res.status(200).json({message:"Login Details Found",fetch_login:fetchlogin});
    }   
    catch(err){
        console.log("Login details could not be fetched",err);
        res.status(500).json({error:"Internal server error"});
    } 
}

exports.update_login = async (req,res) => {
    try{
        const udatelogin = await LoginController.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!udatelogin){
          return  res.status(404).json({message:"Login details not found for updation"});
        }
    }   
    catch(err){
        console.log("Login detail update failed",err);
        res.status(500).json({message:"Internal server error"})
    } 
}

exports.delete_login = async (req,res) => {
    try{
        const deletelogin = await LoginController.findByIdAndDelete(req.params.id);
        if(!deletelogin){
           return res.status(404).json({message:"Details could not found"});
        }
        res.status(200).json({message:"Login details deleted successfully",deleted_data: deletelogin});
    }   
    catch(err)
    {
        console.log("Error during deletion:",err);
        res.status(500).json({messagae:"Internal Server Error"});
    } 
}