//Dung buffer de chuyen doi bien sang dang Buffer de co the truyen di
var buffer = new Buffer("Hello", "utf-8");

//Du lieu sau khi chuyen thanh Buffer
console.log(buffer);

//Chuyen buffer sang String
console.log(buffer.toString());

//Chuyen buffer sang Json
console.log(buffer.toJSON());