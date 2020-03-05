const arrObject = require('./utils/array-object');
const PDFDocument = require('pdfkit');
const fs = require('fs');

config = {
    background: {
        image: './pdf/Backgroud-Giay-moi-2019.jpg',
        left: 0,
        top: 0,
        width: 610,
        height: 422
    },
    page_config: {
        size: 'A5',
        margin: 0,
        layout: 'landscape'
    },
    color_default: "blue",
    title: "mau giay moi",
    author: "intenet"
}
mask = {
    name: {
        col: 120,
        row: 100
    },
    page: {
        col: 540,
        row: 380,
        color: "red"
    }
}
list_data = [
    { name: "Nguyen Van Dinh", page: 1 },
    { name: "Nguyen Van Anh", page: 2 }
]

const pagesPrint = [];
list_data.forEach(data => {
    let objUser = arrObject.getMatrix(mask, data, { col: 0, row: 0 })
    pagesPrint.push(objUser);
})
// console.log(pagesPrint);

const doc = new PDFDocument(
    config.page_config
);
const defaultColor = config.color_default;

const outputFilename = './pdf/giay_moi_a4.pdf';
doc.pipe(fs.createWriteStream(outputFilename));

doc.info['Title'] = config.title;
doc.info['Author'] = config.author;

doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
doc.font('Time-new-roman-utf8');

doc.fontSize(12);
doc.fillColor(defaultColor);

pagesPrint.forEach((page, idx) => {
    if (idx > 0) doc.addPage();
    doc.image(config.background.image, config.background.left, config.background.top, { width: config.background.width, height: config.background.height });
    page.forEach(point => {
        if (point.color) doc.fillColor(point.color);
        else doc.fillColor(defaultColor);
        doc.text(point.value, point.col, point.row);
    })
})
doc.end();
console.log("Da tao ra file pdf!");