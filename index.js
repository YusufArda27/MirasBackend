const express = require('express');
const app = express();
const data = require("./data.json");
let port = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send(data)
});

app.get("/random",(req,res)=>{
    var random = data[Math.floor(Math.random() * data.length)];
    console.log(random)
    res.send(random);
});

app.listen(port, ()=>{
    console.log("port başladı")
});
