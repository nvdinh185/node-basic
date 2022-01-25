class ConNguoi {
    constructor(hoTen = "unknown", namSinh = "unknown") {
        this.hoTen = hoTen;
        this.namSinh = namSinh;
    }
    getThongTin() {
        return "Tên " + this.hoTen + ", sinh năm " + this.namSinh;
    }
}

class SinhVien extends ConNguoi {
    constructor(maSSV = "unknown", hoTen, namSinh) {
        super(hoTen, namSinh);
        this.maSSV = maSSV;
    }
    getThongTin() {
        return super.getThongTin() + ", mã sinh viên " + this.maSSV;
    }
}

let sinhVien1 = new SinhVien("B1704863", "Ngô Minh Trung", "1999");
console.log(sinhVien1.getThongTin());

let sinhVien2 = new ConNguoi("Ngô Minh Trung", "1999");
let sinhVien3 = {};

console.log(sinhVien1 instanceof ConNguoi); // true
console.log(sinhVien2 instanceof ConNguoi); // true
console.log(sinhVien3 instanceof ConNguoi); // False