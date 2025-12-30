const TaskController = require('../model/task_schema');

exports.create_task = async (req, res) => {
    try {
        const CreateTask = await TaskController.create(req.body);
        res.status(200).json({ messagae: "Task created successfully:", createtask: CreateTask });
    }
    catch (err) {
        console.log("Task creation failed:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.fetch_task = async (req, res) => {
    try {
        const FetchTask = await TaskController.findById(req.params.id);
        if (!FetchTask) {
            return res.status(404).json({ message: "Task not found" })
        }
        res.status(200).json({ message: "Details Found", fetchtask: FetchTask });
    }
    catch(err){
        console.log("Error occured:",err);
        res.status(500).json({message:"Internal Server error"});
    }
}

exports.update_task = async (req, res) => {
    try{
        const UpdateTask = await TaskController.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!UpdateTask){
            return res.status(404).json({message:"Task not found for updation:"});
        }
        res.status(200).json({message:"Task Updated Successfully"});
    }
    catch(err){
        console.log("Error occured:",err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.delete_task = async (req, res) => {
    try{
        const DeleteTask = await TaskController.findByIdAndDelete(req.params.id);
        if(!DeleteTask){
            return res.status(404).json({message:"Task not found for deletion:"})
        }
        res.status(200).json({message:"Task deleted Successfully"});
    }
    catch(err){
        console.log("Error occured in task deletion:",err);
        res.status(500).json({message:"Internal Server Error"});
    }
}
