
const express = require('express');
const cors = require('cors')
const { createTodo, updateTodo, deleteTodo } = require('./types');
const { todo } = require('./db');

const app = express();
app.use(cors())
app.use(express.json());

app.post("/todo", async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg: "Wrong Inputs!!!"
        })
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.send({msg: "todo added"})
})

app.get("/todos", async (req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.post("/completed", async (req,res)=>{
    const updatePayload =  req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg: "Wrong Inputs!!!"
        })
    }
    await todo.updateOne({
        _id: updatePayload.id
    }, {
        $set: {
            completed : true
        }
    })
    
    res.json({
        msg: "Todo Updated"
    })
})

app.post("/deleted", async (req, res) => {
    const deletePayload = req.body;
    const parsedPayload = deleteTodo.safeParse(deletePayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "Wrong Inputs!!!"
        })
    }
    await todo.deleteOne({
        _id: deletePayload.id
    })

    res.json({
        msg: "Todo Deleted"
    })
})

app.use((er, req,res)=>{
    console.error(err.stack); 
    res.status(500).send('Something went wrong'); 
})

app.listen(3000)