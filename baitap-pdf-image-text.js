const PDFDocument = require('pdfkit');
const fs = require('fs');
var outputFilename = './pdf/giay_moi_A4.pdf';

const isEquikeylent = (a, b, isSameKey, isSameValue) => { //la giong nhau cau truc hoan toan isSame
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    if ((isSameKey || isSameValue) && aProps.length !== bProps.length) return false;
    for (let i = 0; i < aProps.length; i++) if (isSameValue && a[aProps[i]] !== b[aProps[i]]) return false;
    for (let i = 0; i < aProps.length; i++) if (bProps.find(x => x === aProps[i]) === undefined) return false;
    return true;
}
const clone = (obj) => {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
const colxrow = { col: 0, row: 0 };

const GetMatrix = (maskMatrix, data, point) => {
    let matrix = [];

    var PrintMatrix = (objPrintMatrix, dataObject) => {
        for (let key of Object.keys(objPrintMatrix)) {
            //console.log(typeof billPrintMatrix[key]);
            if (Array.isArray(objPrintMatrix[key])) {
                objPrintMatrix[key].forEach((x, idx) => {
                    if (isEquikeylent(point, x)) {
                        //day la toa do
                        //console.log('point X', key, idx, x, dataObject[key][idx]);
                        x.value = dataObject[key][idx];
                        if (x.value !== undefined && x.value !== null && x.value !== '') matrix.push(clone(x));
                    } else {
                        //day la doi tuong hoac mang con
                        if (Array.isArray(x)) {
                            //chua xu ly
                            //console.log('ARRAY KHONG XU LY: ', key, idx, x);
                        } else {
                            //la doi tuong thi xu ly de quy
                            //console.log('data array', x,  dataObject[key][idx])
                            if (dataObject[key] && dataObject[key][idx]) PrintMatrix(x, dataObject[key][idx]);
                        }
                    }
                })
                //console.log(key,'array');
            } else {
                if (isEquikeylent(point, objPrintMatrix[key])) {
                    //day la toa do
                    let x = objPrintMatrix[key];
                    //console.log('point X', key, 0, x, dataObject[key])
                    x.value = dataObject[key];
                    if (x.value !== undefined && x.value !== null && x.value !== '') matrix.push(clone(x));
                } else {
                    //day la doi tuong con xu ly de quy
                    //console.log('data next', dataObject[key])
                    if (dataObject[key]) PrintMatrix(objPrintMatrix[key], dataObject[key]);
                }
            }
        }

    }
    PrintMatrix(maskMatrix, data);
    return matrix;
}

var background = './pdf/Backgroud-Giay-moi-2019.jpg'
var mask = { ten_kh: { col: 100, row: 20 }, sotrang: { col: 300, row: 25 } };
var data = { ten_kh: "Nguyen Van Dinh", sotrang: 1 };


var dsKhachHang = [
    { ten_kh: "Nguyen Van Dinh", sotrang: 1 },
    { ten_kh: "Nguyen Van anh", sotrang: 2 },
    { ten_kh: "Nguyen Van em", sotrang: 3 },
    { ten_kh: "Nguyen Van minh", sotrang: 4 },
    { ten_kh: "Nguyen Van ha", sotrang: 5 },
    { ten_kh: "Nguyen Van hung", sotrang: 6 },
    { ten_kh: "Nguyen Van hoa", sotrang: 7 }
]

var printPdf = {
    config: {
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

    },
    mask: {
        ten_kh: {
            col: 120,
            row: 100
        },
        sotrang: {
            col: 540,
            row: 380,
            color: "red"
        }
    },
    list_data: [
        { ten_kh: "Nguyen Van Dinh", sotrang: 1 },
        { ten_kh: "Nguyen Van anh", sotrang: 2 },
        { ten_kh: "Nguyen Van em", sotrang: 3 },
        { ten_kh: "Nguyen Van minh", sotrang: 4 },
        { ten_kh: "Nguyen Van ha", sotrang: 5 },
        { ten_kh: "Nguyen Van hung", sotrang: 6 },
        { ten_kh: "Nguyen Van hoa", sotrang: 7 }
    ]
}

//console.log(isEquikeylent(a,b));
//console.log(GetMatrix(mask, data, colxrow));

dsKhachHang.forEach((kh, idx) => {
    let mx = GetMatrix(mask, kh, colxrow);
    //console.log(mx);
})


/**
 * Ham nay se tao ra 1 file pdf tu du lieu vao
 * @param {*} inputConfig {config: {background:{...}, page_config, color_default, title, author}, mask:{},list_data: [{data same mask}] }
 * @param {*} fileName 
 */
var createPdf = (inputConfig, fileName) => {
    var config = {
        background: {
            image: (inputConfig.config && inputConfig.config.background && inputConfig.config.background.image) ? inputConfig.config.background.image : './pdf/Backgroud-Giay-moi-2019.jpg',
            left: (inputConfig.config && inputConfig.config.background && inputConfig.config.background.left) ? inputConfig.config.background.left : -5,
            top: (inputConfig.config && inputConfig.config.background && inputConfig.config.background.top) ? inputConfig.config.background.top : -3,
            width: (inputConfig.config && inputConfig.config.background && inputConfig.config.background.width) ? inputConfig.config.background.width : 610,
            height: (inputConfig.config && inputConfig.config.background && inputConfig.config.background.height) ? inputConfig.config.background.height : 845
        },
        page_config: {
            size: (inputConfig.config && inputConfig.config.page_config && inputConfig.config.page_config.size) ? inputConfig.config.page_config.size : 'A4',
            margin: (inputConfig.config && inputConfig.config.page_config && inputConfig.config.page_config.margin) ? inputConfig.config.page_config.margin : 0,
            layout: (inputConfig.config && inputConfig.config.page_config && inputConfig.config.page_config.layout) ? inputConfig.config.page_config.layout : 'portrait'
        },
        color_default: (inputConfig.config && inputConfig.config.color_default) ? inputConfig.config.color_default : "blue",
        title: (inputConfig.config && inputConfig.config.title) ? inputConfig.config.title : "mau giay moi",
        author: (inputConfig.config && inputConfig.config.author) ? inputConfig.config.author : "intenet"

    };

    var doc = new PDFDocument(
        config.page_config
    );

    var defaultColor = config.color_default;
    var stream = doc.pipe(fs.createWriteStream(fileName));

    doc.info['Title'] = config.title;
    doc.info['Author'] = config.author;

    doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
    doc.font('Time-new-roman-utf8');

    doc.fontSize(12);
    doc.fillColor(defaultColor);
    //trang luu
    printPdf.list_data.forEach((el, idx) => {
        let mx = GetMatrix(printPdf.mask, el, colxrow);
        if (idx > 0) doc.addPage();
        mx.forEach(row => {
            doc.image(config.background.image, config.background.left, config.background.top, { width: config.background.width, height: config.background.height });
            if (row.color) doc.fillColor(row.color);
                doc.text(row.value, row.col, row.row);
        })
    })
    
    doc.end();
}

createPdf(printPdf, outputFilename);