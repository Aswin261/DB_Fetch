const express=require('express');
const cors = require("cors");
const {connectToDb,getDb}=require('./db')
let db
const app=express();
app.use(express.json());
app.use(cors());
connectToDb((err)=>{
    if(!err){
        app.listen(3001,()=>{
            console.log("listening on port 3001")
    })
    db=getDb()
}
})


app.get('/posts',(req,res)=>{
    let posts=[]
    db.collection('posts')
    .find()
    .sort({id:1})
    .forEach(post=>posts.push(post))
    .then(()=>{
        res.status(200).json(posts)
    })
    .catch(()=>{
        res.status(500).json({error:"fetch the documents"})
    })
})

app.get('/users',(req,res)=>{
    let users=[]
    db.collection('users')
    .find()
    .sort({id:1})
    .forEach(user=>users.push(user))
    .then(()=>{
        res.status(200).json(users)
    })
    .catch(()=>{
        res.status(500).json({error:"fetch the documents"})
    })
})

//Post
app.post('/users',(req,res)=>{

    db.collection('users')
    .insertOne({
        id:Number(req.body.id),
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
    })
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(err=>{
        res.status(500).json({err:'could not create a document'})
    })
})

//post product
app.post('/posts',(req,res)=>{

    db.collection('posts')
    .insertOne({
        id:Number(req.body.id),
        title:req.body.title,
        price:Number(req.body.price),
        category:req.body.category
    })
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(err=>{
        res.status(500).json({err:'could not create a document'})
    })
})
    
    




