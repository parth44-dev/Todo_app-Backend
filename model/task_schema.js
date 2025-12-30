const mongoose = require('mongoose');

const task_schema = new mongoose.Schema({
    task:{
        type:String,
        required:[true,"Please enter a task to store"]
    } 
},{timestamps:true});

module.exports = mongoose.model('Task_data',task_schema);
