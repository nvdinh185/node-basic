const excel = require('node-excel-export');
const fs = require('fs');

const styles = {
  headerDark: {
    fill: {
      fgColor: {
        rgb: 'FF000000'
      }
    },
    font: {
      color: {
        rgb: 'FFFFFFFF'
      },
      sz: 14,
      bold: true,
      underline: true,
      italic: true
    },
    alignment:{
      horizontal: 'center',
    }
  },
  cellPink: {
    fill: {
      fgColor: {
        rgb: 'FFFFCCFF'
      }
    }
  },
  cellGreen: {
    fill: {
      fgColor: {
        rgb: 'FF00FF00'
      }
    }
  }
};

const heading = [
  [{ value: 'Danh sach sinh vien', style: styles.headerDark }],
];

const specification = {
  customer_name: {
    displayName: 'Customer',
    headerStyle: {},
    cellStyle: styles.cellGreen,
    width: 120
  },
  status_id: {
    displayName: 'Status',
    headerStyle: {},
    cellFormat: function (value, row) {
      return (value == 1) ? 'Active' : 'Inactive';
    },
    width: '20'
  },
  note: {
    displayName: 'Description',
    headerStyle: {},
    cellStyle: styles.cellPink,
    width: 220
  }
}

const dataset = [
  { customer_name: 'IBM', status_id: 1, note: 'some note' },
  { customer_name: 'HP', status_id: 0, note: 'some note' },
  { customer_name: 'MS', status_id: 0, note: 'some note' }
]

const merges = [{ start: { row: 1, column: 1 }, end: { row: 1, column: 3 } }]

const report = excel.buildExport(
  [
    {
      name: 'Report',
      heading: heading,
      merges: merges,
      specification: specification,
      data: dataset
    }
  ]
);

fs.writeFile('./excel/report.xlsx', report, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('excel ./excel/report.xlsx saved!');
  }
});