window.onload = function () {
	returnH1Tag();
	// console.log(a);
};

var a = [null, undefined, 1, 2, 3, 'a', 'b', 'c'];

function returnH1Tag() {
	var h1Tag = document.getElementsByTagName('h1');
	for (var i = 0; i < h1Tag.length; i++) {
		a.push(h1Tag[i]);
	}

	// var idTest = document.getDocumentById('idTest');
	var idTestTag = document.getElementsByClassName('idTest')[0];
	console.log(idTestTag.childElementCount.length);
	console.log(idTestTag.childNodes.length);
	console.log(idTestTag.innerHTML);
	console.log(idTestTag.outerHTML);
	console.log(idTestTag.innerText);
	console.log(idTestTag.parentElement);
	console.log(idTestTag.nextSibling);
}

function alertToWindow() {
	alert('Goi Ham Alert To WIndow!');
}
