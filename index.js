import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

var content1="";
var content2="";
var content3="";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res) => {
    res.render("index.ejs");
});

app.get("/about",(req,res) => {
    res.render("about.ejs");
});

app.get("/contacts",(req,res) => {
    res.render("contact.ejs");
});

app.get("/start",(req,res) => {
    res.render("startposts.ejs");
});

app.get("/post",(req,res) => {
    res.render("post.ejs");
});

app.post("/post",(req,res) => {
    content1=req.body["name"];
    content2=req.body["email"];
    content3=req.body["message"];
    res.render("post.ejs" , {
        c1:content1,
        c2:content2,
        c3:content3,
    });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
});