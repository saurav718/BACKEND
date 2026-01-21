// module  js to create express server
import express  from 'express';

//coomon js syntax  to create express server
// const express=require('express');

const app=express();
app.use(express.static('dist'))

// app.get('/',(req,res)=>{
//      res.send('SERVER IS READY');
// })

//get a list of 5 jokes
app.get('/api/joke',(req,res)=>{
    const jokes=[
        {id:1,joke:"Why don't scientists trust atoms? Because they make up everything!"},
        {id:2,joke:"Why did the bicycle fall over? Because it was two-tired!"},
        {id:3,joke:"What do you call fake spaghetti? An impasta!"},
        {id:4,joke:"Why did the scarecrow win an award? Because he was outstanding in his field!"},
        {id:5,joke:"Why don't skeletons fight each other? They don't have the guts!"}
    ];
    res.json(jokes);
})

// cjhoosing thefrot frpm env variballe or default port 5000
const port=process.env.PORT||5000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})