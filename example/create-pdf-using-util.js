const pdfUtil = require('./utils/pdf-util');

const listUsers = [
    { ten_kh: "Nguyen Van Dinh", so_trang: 1 },
    { ten_kh: "Nguyen Van anh", so_trang: 2 },
    { ten_kh: "Nguyen Van Tai", so_trang: 3 },
    { ten_kh: "Nguyen Van minh", so_trang: 4 },
    { ten_kh: "Nguyen Van ha", so_trang: 5 },
    { ten_kh: "Nguyen Van hung", so_trang: 6 },
    { ten_kh: "Nguyen Van hoa", so_trang: 7 }
];

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
        so_trang: {
            col: 540,
            row: 380,
            color: "red"
        }
    },
    list_data: listUsers
}

var outputFilename = './pdf/giay_moi_a4.pdf';
pdfUtil.createPdf(printPdf, outputFilename);
//ket qua la tap giay moi pdf cho nhieu khach hang