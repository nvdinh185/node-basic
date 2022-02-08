const prompt = require("prompt-sync")({ sigint: true });

class DiemThiKhoiA {
    constructor(hoTen, diemToan, diemLy, diemHoa) {
        this.hoTen = hoTen;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }

    inputData() {
        this.hoTen = prompt("Nhap ho va ten: ");
        this.diemToan = prompt("Nhap diem Toan: ");
        this.diemLy = prompt("Nhap diem Ly: ");
        this.diemHoa = prompt("Nhap diem Hoa: ");
    }

    diemTrungBinh() {
        return (parseFloat(this.diemHoa) + parseFloat(this.diemLy) + parseFloat(this.diemToan)) / 3;
    }

}

module.exports = DiemThiKhoiA;