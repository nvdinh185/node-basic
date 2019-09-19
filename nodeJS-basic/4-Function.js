function tinhtong(a, b){
	return (a+b);
}
var x = tinhtong(5, 3);
console.log("Tong la: "+x);

//-----------------------------------
function hello(){
	console.log("Xin chao anh Dinh!");
}
function goiHam(fn){
	fn();
}
goiHam(hello);

//------------------------------------
var tong = function(){
	console.log("Lap trinh NodeJS");
}
tong();
goiHam(tong)
