// Tạo ra một class SinhVien
class SinhVien {
    //Hàm khởi tạo 
    constructor(MSSV, hoTen, gioiTinh, namSinh) {
        this.MSSV = MSSV;
        this.hoTen = hoTen;
        this.gioiTinh = gioiTinh;
        this.namSinh = namSinh;
    }

    // Các phương thức getter
    get getMSSV() {
        return this.MSSV;
    }
    get getHoTen() {
        return this.hoTen;
    }
    get getGioiTinh() {
        return this.gioiTinh;
    }
    get getNamSinh() {
        return this.hoTen;
    }

    // Các phương thức setter
    set setMSSV(MSSV) {
        this.MSSV = MSSV;
    }
    set setHoTen(hoTen) {
        this.hoTen = hoTen;
    }
    set setGioiTinh(gioiTinh) {
        this.gioiTinh = gioiTinh;
    }
    set setNamSinh(namSinh) {
        this.namSinh = namSinh;
    }

    //Khai báo phương thức
    hocBai() {
        console.log('Đang học bài...');
    }
    diNgu() {
        console.log('Đang ngủ...');
    }
    static xemPhim() {
        console.log('Đang xem phim...');
    }
}

// Khởi tạo các đối tượng sinh viên
let sinhVien1 = new SinhVien("B1704863", "Ngô Minh Trung", "Nam", "1999");

// Log ra thông tin đối tượng
console.log(sinhVien1);

//Log ra thuộc tính theo phương thức getter
console.log(sinhVien1.getGioiTinh);

// Thiết lập lại giới tính
sinhVien1.setGioiTinh = "Nữ";

// Log ra giới tính hiện tại
console.log(sinhVien1.getGioiTinh);

// gọi method
sinhVien1.diNgu();

// gọi method static
SinhVien.xemPhim();
