const express=require('express');
const middlewarerouter=require("./router.js")
//storing object in the app
const app=express();
const loggerew=require('./logger.js');

app.use(loggerew);
//1.Application level middleware
//2.Router level middleware
//3.Error handling middleware
//4.Build in middleware
//5.Third party middleware 

//Application level middleware :it is used in whole app
//require flase when we do require
//true if import
//route specific middleware
//express.urlencode is built in middleware
app.use(express.urlencoded({extended:false}));
//this will run before router
//Middleware used used in these application are application level middleware
//app.get()
//app.use()
app.use("/router",middlewarerouter);
app.get("/get",(req,res)=>
{
    const body=req.body;
    res.send(req.log);
})
app.post("/post",(req,res)=>
{
    const body=req.body;
    res.send(body);
})
const portnumber=8000;
app.listen(portnumber,(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(`Server is running on port ${portnumber}`);
    }
})
//logger will run before middleware when we write ge11 or something else it will give error because we did not maintained this this logger line will run before middleware