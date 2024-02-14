const mongoose = require("mongoose");
mongoose.connect("YOUR_URL");

const todoSchema = mongoose.Schema({
    title : String, 
    description : String,
    completed : Boolean
});

const todo = mongoose.model("Todos", todoSchema);

module.exports = {
    todo:todo
};
