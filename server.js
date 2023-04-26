var express=require('express');
const path=require('path');
const app =express();
const multer=require('multer');
const uplaod=multer({dest:'uploads/'});
const {mergePDFs}=require('./merger');
const port=3000;
app.use('/static',express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"templates/index.html"));
});
app.post('/merge',uplaod.array('pdfs',10),async(req,res,next)=>{
   await mergePDFs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path));
    res.redirect("http://localhost:3000/static/merged.pdf");
});
app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`);
});