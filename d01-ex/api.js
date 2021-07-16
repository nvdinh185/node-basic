function returnValuesFromAddOperation() {
	var input1 = parseFloat(document.getElementById('input1').value);
	var input2 = parseFloat(document.getElementById('input2').value);
	return [input1 + input2, input1, input2];
}

function returnValuesFromSubOperation() {
	var input1 = parseFloat(document.getElementById('input1').value);
	var input2 = parseFloat(document.getElementById('input2').value);
	return [input1 - input2, input1, input2];
}