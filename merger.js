const PDFMerger=require('pdf-merger-js');
var merger=new PDFMerger();

const mergePDFs=async (p1,p2)=>{
    await merger.add(p1);
    await merger.add(p2);
    await merger.save('public/merged.pdf');
}
module.exports={mergePDFs};