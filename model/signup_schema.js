const mongoose = require('mongoose');

const signup_schema = new mongoose.Schema({
    email:{
            type:String,
            required:[true,"Email needed to sign up"],
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password:{
         type:String,
        required:[true,"Password is neccesary to login"],
        // match: [ /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must be at least 8 characters long and contain at least one letter and one number' ]
    },
    confirmPassword:{
        type:String,
        required:[true,"Password is neccesary to login"],
        // match: [ /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must be at least 8 characters long and contain at least one letter and one number' ]
    }
},{timestamps:true})

module.exports = mongoose.model('Signup_Data',signup_schema);