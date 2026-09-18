const express=require("express");
const app=express();
const PORT=3000

app.get("/",(req,res)=>{
    res.send("hello students");

})

app.get()

app.get("/contact",(req,res)=>{
    res.send("hello from contact route");
})

app.listen(3000,()=>console.log("server is runningg on port 3000"));
