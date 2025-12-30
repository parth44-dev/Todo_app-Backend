const SignupController = require('../model/signup_schema')

exports.create_signup = async (req,res) => {
    try{
        const CreateSignup = await SignupController.create(req.body);
        res.status(200).json({message:"signup details generated",createsignup : CreateSignup});
    }
    catch(err){
        console.log("Details not generated:",err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.fetch_signup = async (req,res) => {
    try{
        const FetchSignup = await SignupController.findById(req.prarms.id);
        if(!FetchSignup){
            return res.status(404).json({message:"Signup details not found"});
        }
        res.status(200).json({message:"Deatails found",fetchsignup : FetchSignup});
    }
    catch(err){
        console.log("Failed to fetch details:",err);
        res.status(500).json({message: "Internal Server Error"});
    }
}

exports.update_signup = async (req,res) => {
    try{
        const UpdateSignup = await SignupController.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!UpdateSignup){
            return res.status(404).json({message: "Details could not be found for updation"});
        }
        res.status(200).json({message:"Updated Successfully"});
    }
    catch(err){
        console.log("Udation Failed:",err);
        res.status(500).json({message:"Internal Server Error"})
    }
}

exports.delete_signup = async (req,res) => {
    try{
        const DeleteSignup = await SignupController.findByIdAndDelete(req.params.id);   
        if(!DeleteSignup){
            return res.status(404).json({message: "Delatils not fount to delete"});
        }
        res.status(200).json({message:"deletion successfull"});
    }
    catch(err){
        console.log("Error occured during deletion:",err);
        res.status(500).json({message:"Internal Server Error"});
    }
}