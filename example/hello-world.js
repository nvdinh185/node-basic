var PDFDocument = require('pdfkit');                      
var fs=require('fs');
doc = new PDFDocument();

var loremIpsum = 'Hello World';  

doc.x = 30;
doc.y = 30;
doc.fillColor('black')
doc.text(loremIpsum, {
   paragraphGap: 10,
   indent: 20,
   align: 'justify',
   columns: 2
});  

var outputFilename = './pdf/hello-world.pdf';
doc.pipe(fs.createWriteStream(outputFilename));
doc.end();