const express = require("express");
const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    res.send("hh");
});

app.listen(port);
