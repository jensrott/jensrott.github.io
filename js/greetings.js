var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Goede Avond!';
} else if (hourNow > 12) {
	greeting = 'Goede Middag!';
} else if (hourNow > 0) {
	greeting = 'Goede Morgen!';
} else {
	greeting = 'Welkom!';
}

document.write(greeting);
