
function userAgeRestriction() {
	var userAgeValue = document.getElementById('user-age').value;
	if (userAgeValue >= 18) {
		alert('You can visit our website');
	} else {
		alert('You are too young');
	}
}
