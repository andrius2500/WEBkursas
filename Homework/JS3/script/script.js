var userNamePrompt, ageNumberPrompt;

userNamePrompt = prompt('What is your name?');

if (userNamePrompt.length < 3) {
	alert('Too short');
} else {
	ageNumberPrompt = prompt('How old are you?');
}


if (ageNumberPrompt < 18) {
	alert('Too young');
} else {
	(ageNumberPrompt > 18 && userNamePrompt.length > 3);
}


for (userNamePrompt.length; userNamePrompt.length < 3; userNamePrompt.length++) {
	userNamePrompt = prompt('What is your name?');
	break;
}

for (ageNumberPrompt; ageNumberPrompt < 18; userNamePrompt.length++) {
	ageNumberPrompt = prompt('How old are you?');
	break;
}

