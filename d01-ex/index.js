window.onload = function () { };
// console.log(parseInt('1') + 1);

var a = 0;

function onAdd(btn) {
	console.log(btn);
	// B1. Lay gia tri tu the input hoac tu API
	var [tong, input1, input2] = returnValuesFromAddOperation();
	// B2. Xu ly khi loi
	checkErrInput(input1, input2);
	// B3. Ham viet gia tri ra GUI
	renderTongToUI(tong);
}

function onMinus(e) {
	e.preventDefault();
	// var input1 = parseFloat(document.getElementById('input1').value);
	// var input2 = parseFloat(document.getElementById('input2').value);
	var [hieu, input1, input2] = returnValuesFromSubOperation();
	checkErrInput(input1, input2);
	renderTongToUI(hieu);
}

// function onMulti() {}

// function onDiv() {}
