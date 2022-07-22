const express=require("express");

const body=require("body-parser");

const app=express();

app.set("view engine","ejs");

app.use(body.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

var items=["Buy Food","Cook Food","Eat Food"];



app.get("/",function(req,res){

    var today=new Date();
    var currentDay=today.getDay();
    var day=" ";

    var options ={
        weekday: "long",
        day: "numeric",
        month:"long"
    };

    var day=today.toLocaleDateString("en-US",options);
    
    res.render("list",{kindofday:day,additem:items});

});

app.post("/",function(req,res){
    var item=req.body.newitem;
    items.push(item);
    res.redirect("/");
    console.log(item);
});




app.listen(300,function(){
    console.log("Working");
})