const express = require("express");
const db = require("./db");

const app = express();

app.get("/",(req,res)=>{
    res.send("Backend Running");
});

app.get("/users",(req,res)=>{

    db.query("SELECT NOW() as time",(err,result)=>{

        if(err){
            return res.send(err);
        }

        res.json(result);

    });

});

app.listen(5000,()=>{
    console.log("Server Running");
});
