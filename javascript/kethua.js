class ConNguoi {
    constructor(hoTen = "unknown", namSinh = "unknown") {
        this.hoTen = hoTen;
        this.namSinh = namSinh;
    }
    getHoTen() {
        return "Tên " + this.hoTen + ", sinh năm " + this.namSinh;
    }
}

class SinhVien extends ConNguoi {
    constructor(maSSV = "unknown", hoTen, namSinh) {
        super(hoTen, namSinh);
        this.maSSV = maSSV;
    }
    getThongTin() {
        return this.getHoTen() + ", mã sinh viên " + this.maSSV;
    }
}

var sinhVien1 = new SinhVien("B1704863", "Ngô Minh Trung", "1999");
console.log(sinhVien1.getThongTin());