const moongose = require('mongoose')

const dbconnect = async() => {
    try{
            await moongose.connect('mongodb://127.0.0.1:27017/todo');
            console.log("MongoDb Connected");
    }
    catch(err){
            console.log("Connection Failed",err.message);
    }
};

module.exports = dbconnect;