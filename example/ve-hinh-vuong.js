var PDFDocument = require('pdfkit');                      
var fs=require('fs');
doc = new PDFDocument();
doc.moveTo(0, 0)
   .lineTo(100, 0)
   .lineTo(100, 100)
   .lineTo(0, 100)
   .fill('red', 'even-odd');  

var outputFilename = './pdf/hinh-vuong.pdf';
doc.pipe(fs.createWriteStream(outputFilename));
doc.end();