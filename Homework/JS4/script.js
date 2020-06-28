
function divideTwoNumbers() {
	var firstNumberInput = document.getElementById('first-number-value').value;
	var secondNumberInput = document.getElementById('second-number-value').value;
	var inputValueResult = Number(firstNumberInput) / Number(secondNumberInput);
	return inputValueResult;
}


function divideResultValue() {
	var textToConsole = divideTwoNumbers();
	console.log(textToConsole);
}
