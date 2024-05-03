const express = require("express");
const app = new express();

const PORT= 1579;
app.listen(PORT,()=>console.log("Running Express Server or the very first time :D"));


app.get('/StudentDetails',(req,res)=>{
    res.send({
        name : "Riya Motwani",
        age : 20,
        course : "BCA",
        year : "2nd",
        semester : "4th",
        SGPA : 8.88
    })
});