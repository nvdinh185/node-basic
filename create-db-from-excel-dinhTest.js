const fs = require('fs');
const SQLiteDAO = require('./db/sqlite3/sqlite-dao');

const dirDB = 'db';

const xlsxtojson1st = require("xlsx-to-json-lc");
const excelToJsonAll = require('convert-excel-to-json');

var db;
var newDB = './' + dirDB + '/bsong2.db';
var excelFile = './excel/test.xlsx'
db = new SQLiteDAO(newDB);

//doc excel và tạo bảng trong DB
var distinct_table_name = [];
try {
    let settingFile = excelFile;
    xlsxtojson1st({
        input: settingFile,
        output: null,
        lowerCaseHeaders: true
    }, (err, results) => {
        if (err) {
            console.log(err);
        }

        /* results.forEach(el => {
            if (!distinct_table_name.find(x => x == el.table_name)) distinct_table_name.push(el.table_name)
        });

        distinct_table_name.forEach(el => {
            let table = results.filter(x => x.table_name == el);
            if (table) {
                let tableJson = {};
                tableJson.name = el;
                tableJson.cols = [];
                table.forEach(e => {
                    let col = {};
                    col.name = e.field_name;
                    col.type = e.data_type;
                    col.option_key = e.options;
                    col.description = e.description;
                    tableJson.cols.push(col);
                })
                db.createTable(tableJson)
                    .then(data => {
                        console.log(data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }) */
    });
} catch (e) {
    console.log("Corupted excel file", e);
}
setTimeout(() => {
console.log("abc: ", distinct_table_name)
}, 1000)


//doc du lieu va insert vao DB
/*
setTimeout(() => {
    console.log('table created: ', distinct_table_name)
    try {
        let settingFile = excelFile;
        let results = excelToJsonAll({
            sourceFile: settingFile
        });

        distinct_table_name.forEach(tablename => {
            let sheet = results[tablename];
            if (sheet != undefined) {
                console.log('sheet-tablename insert db: ', tablename);
                //chuyen doi kieu doc dong 1 la header
                let header = sheet[0];
                let jsonOut = [];
                for (let i = 1; i < sheet.length; i++) {
                    let row = {};
                    for (let col in header) {
                        if (sheet[i][col] != undefined) {
                            Object.defineProperty(row, header[col], { //ten thuoc tinh
                                value: (tablename == 'customers' && header[col] == 'start_date') ? new Date().getTime() : sheet[i][col], //gia tri cua thuoc tinh
                                writable: false, //khong cho phep sua du lieu sau khi gan gia tri vao
                                enumerable: true, //cho phep gan thanh thuoc tinh truy van sau khi hoan thanh
                                //configurable: false default
                            });
                        }
                    }
                    jsonOut.push(row);
                }
                //thuc hien insert data vao table da tao
                for (let i = 0; i < jsonOut.length; i++) {
                    let row = jsonOut[i];
                    let jsonInsert = { name: tablename, cols: [] }
                    for (let key in row) {
                        let col = { name: key, value: row[key] };
                        jsonInsert.cols.push(col);
                    }
                    db.insert(jsonInsert)
                        .then(data => {
                        })
                        .catch(err => {
                        })
                }
            }
        })
    } catch (e) {
        console.log("Corupted excel file", e);
    }
}, 1000);
//Select du lieu tu bang ra
setTimeout(() => {
    db.getRsts("SELECT * FROM songs")
        .then(data => {
            console.log("ket qua select:", data);
        })
        .catch(err => {
            console.log("Loi select", err);
        });
}, 2000)
*/