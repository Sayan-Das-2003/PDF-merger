var express=require('express');
const path=require('path');
const app =express();
const multer=require('multer');
const uplaod=multer({dest:'uploads/'});
const port=3000;
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"templates/index.html"));
});
app.post('/merge',uplaod.array('pdfs',10),(req,res,next)=>{
    console.log(req.files);
});
app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`);
})