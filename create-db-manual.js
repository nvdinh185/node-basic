const fs = require('fs');
const SQLiteDAO = require('./db/sqlite3/sqlite-dao');
const dataType = require('./db/sqlite3/sqlite-datatype');
const dirDB = 'db';

const dbFile = './' + dirDB + '/my-database.db';

if (!fs.existsSync(dirDB)) {
    fs.mkdirSync(dirDB);
}

var db = new SQLiteDAO(dbFile);

//1.  tao bang trong db
/* var table = {
    name: 'sinhvien',
    cols: [
        {
            name: 'id',
            type: dataType.integer,
            option_key: 'PRIMARY KEY NOT NULL',
            description: 'day la field duy nhat'
        },
        {
            name: 'name',
            type: dataType.text,
            option_key: 'NOT NULL',
            description: 'Mo ta truong name'
        }
    ]
} 

db.createTable(table)
    .then(data => {
        console.log("Tao bang thanh cong!", data);
    })
    .catch(err => {
        console.log("Loi", err);
    }); */

//2.  insert du lieu vao trong bang
var insertTable = {
    name: 'sinhvien',
    cols: [
        {
            name: 'id',
            value: 3
        },
        {
            name: 'name',
            value: 'Nguyen Van Dinh3'
        }
    ]
}
db.insert(insertTable)
    .then(data => {
        console.log("Insert thanh cong!", data);
    })
    .catch(err => {
        console.log("Loi", err);
    });

//4.  select du lieu trong bang
/* var selectTable = {
    name: 'sinhvien',
    cols: [
        {
            name: 'id'
        },
        {
            name: 'name'
        }
    ],
}
db.select(selectTable)
    .then(data => {
        console.log("ket qua select", data);
    })
    .catch(err => {
        console.log("Loi", err);
    }); */

//5. select nhieu bang ghi, theo kieu cau lenh tuong minh
db.getRsts("SELECT * FROM sinhvien")
    .then(data => {
        console.log("ket qua select nhieu:", data);
    })
    .catch(err => {
        console.log("Loi", err);
    });