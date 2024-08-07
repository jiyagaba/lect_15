//router level middleeware
const express=require("express");
const fs=require("fs");
//inside express there is module of router
//we create router to link diiff files
const router=express.Router();

//Creating middleware,when there is request on method before that middleware will run
//when we call next it will send request to next router handler like router-get
// router.use((req,res,next)=>
// {
//     //log is response we get will be store here
//     //in this there will be date and time
//     const log=`${new Date().getTime()}${req.method}-${req.url}`;
//     //forward request to the next router here there router-get and router-post
//     console.log(log);
//     //we are creating key of request object and storing value of log
//     //Now this log key value goes to (next router get("/router-get",(req,res)= and another post too)
//     req.log=log;
//     //this next will send log and key to the router
//     //saving log in file.txt
//     fs.writeFile("logger-txt",log+"\n",{flag:"a"},(err)=>
//     {
//         if(err)
//         {
//             console.log("Error");
//         }
//         else
//         {
//             //log will be written in file and next will forward request to  route handler
//             next();
//         }
//     })
//     //next();
// });
router.get("/get",(req,res)=>
{
    res.send(req.log);

});
router.post("/post",(req,res)=>
{
    res.send(req.log);
});
//router level middlreare
module.exports=router;