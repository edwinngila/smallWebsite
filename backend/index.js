const express = require('express');
const firebase = require("./DB/index")
const App = express();
const routes = express.Router();
const {addDoc,collection}=require("firebase/firestore")
const cors = require("cors");

require('dotenv').config();
App.use(express.json())

const allowedOrigins=[
    'http://localhost:300'
]
App.use(cors({
    origin:(origin,callback)=>{
        if(!origin||allowedOrigins){
            callback(null,true)
        }
        else{
            callback(new error("not allowed by cors"))
        }
    }
}))

const login = routes.post('/LoginRoute',async(req,res,next)=>{
    const[Email,UserName,Password]=req.body;
    console.log(Email,UserName,Password);
    // let data={
    //     Email:Email,
    //     UserName:UserName,
    //     Password:Password,
    // }

    // try {
    //     addDoc(ref,data);
    // } catch (error) {
    //     console.log(error);
    // }
    res.send({
         res:"this is the loginRoute"
    })
});

const signup=routes.post('/SignupRoute',async(req,res,next)=>{
    res.send({
        res:"this is the Signup route"
    })
});

App.use('/route',login);
App.use('/route',signup);

App.use((req,res,next)=>{
    const err = new Error("NOT FOUND");
    err.status=404;
    next(err)
})
App.use((err,res,next)=>{
    res.status(err.status||500);
    res.send({
        error:{
            status:err.status || 500,
            Message:err.Message
        }
    })
})

App.listen(process.env.PORT || 5000,()=>{console.log(`You are now listening to http://127.0.0.1:${process.env.PORT}`)})