//Khai bao class nhu khai bao mot function binh thuong
//phai dung tu khoa function (khong duoc dung arrow function)
function KhoaHoc(ten, hocphi){
	this.Ten = ten;
	this.HocPhi = hocphi;
	this.mota2 = () => {
		console.log("Hello2 "+this.Ten +" "+ this.HocPhi);
	}
}

//Khai bao va dinh nghia mot method 
//(neu o ngoai class thi phai co tu khoa prototype)
KhoaHoc.prototype.mota = () => {
	console.log("Hello "+this.Ten +" "+ this.HocPhi);
}

//Khai bao va dinh nghia mot thuoc tinh
KhoaHoc.prototype.GiaoVien = "Dinh"

//Khoi tao doi tuong (dung tu khoa new)
var nodejs = new KhoaHoc("Lap Trinh NodeJS", 800000);

//Su dung method cua class
nodejs.mota();
nodejs.mota2()
console.log(nodejs.GiaoVien)