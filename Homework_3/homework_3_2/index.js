let minNumber = prompt("Введите минимальное число.");
let maxNumber = prompt("Введите максимальное число.");
minNumber = Number(minNumber);
maxNumber = Number(maxNumber);
if(isNaN(minNumber) || isNaN(maxNumber) ) 
{ 
	alert("Вы ввели некорректное число!"); 
}

if (maxNumber < minNumber) 
{
	let tempNumber = minNumber;
	minNumber = maxNumber;
	maxNumber = tempNumber;
}
for (i = 0; i != stop; i ++) {
	let answer = confirm("Ваше число меньше чем " + maxNumber / 2 + "?");
	if (answer == true) { maxNumber = maxNumber / 2};
	if (answer == false) {maxNumber += maxNumber / 2};
	if (minNumber == maxNumber) {
		alert("Ваше число - " + minNumber);
		stop = i;
	}
}

