const prompt = require("prompt-sync")({ sigint: true });

const DiemThiKhoiA = require("./DiemThiKhoiA");

class DiemThiUuTien extends DiemThiKhoiA {
    constructor(hoTen, diemToan, diemLy, diemHoa, diemUuTien) {
        super(hoTen, diemToan, diemLy, diemHoa);
        this.diemUuTien = diemUuTien;
    }

    inputData() {
        super.inputData();
        this.diemUuTien = prompt("Nhap diem Uu tien: ");
    }

    diemTrungBinh() {
        return super.diemTrungBinh() + parseFloat(this.diemUuTien);
    }

}

let diemthi = new DiemThiUuTien();
diemthi.inputData();
console.log(diemthi.diemTrungBinh());