var xlsxtojson = require("xlsx-to-json-lc");

var filename = './excel/danhsachmau.xlsx';

try {
    xlsxtojson({
        input: filename,
        output: null,
        lowerCaseHeaders: true,
        sheet: "dsdinh"
    }, (err,result) =>{
        if(err) {
            console.log('err', err);
        } 
        console.log("result", result);
    });
} catch (e){
    console.log("Corupted excel file",e);
}