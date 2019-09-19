const excel = require('node-excel-export');
const xlsxtojson = require("xlsx-to-json-lc");
const fs = require('fs');

const cloneExcel = (excelConfig, filenameInput, filenameOutput) => {
    const promise = new Promise((resolve, reject) => {
        try {
            xlsxtojson({
                input: filenameInput,
                output: null,
                lowerCaseHeaders: true,
                sheet: "dsqly"
            }, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        } catch (e) {
            reject(e);
        }
    })
    promise.then(data => {
        var dataset = [];
        data.forEach(objUser => {
            dataset.push(objUser);
        });
        const report = excel.buildExport(
            [
                {
                    name: excelConfig.sheetname,
                    heading: excelConfig.heading,
                    merges: excelConfig.merges,
                    specification: excelConfig.specification,
                    data: dataset
                }
            ]
        );
        fs.writeFile(filenameOutput, report, (err) => {
            if (err) {
                console.log('Loi ', err);
            } else {
                console.log(filenameOutput, ' saved!');
            }
        })

    }).catch(err => {
        console.log(err);
    })
}

module.exports = {
    cloneExcel: cloneExcel
};