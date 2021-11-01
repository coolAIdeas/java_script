const DIVISOR_NUMBER = 6; // Число, котрому должны быть кратны остальные числа.

let firstNumber = prompt("Введите первое число!");
let secondNumber = prompt("Введите второе число!");
firstNumber	= Number(firstNumber);
secondNumber = Number(secondNumber);
if (isNaN(firstNumber) || isNaN(secondNumber)) {
	alert("Вы ввели некорректное число!");
} else {
	if(secondNumber	< firstNumber){
		let tempNumber = firstNumber;
		firstNumber	= secondNumber;
		secondNumber = tempNumber;
	}
	let multiples = 0;
	let sumOfNumbers = 0;
	for ( i = firstNumber; i <= secondNumber; i++) {
		if (i % DIVISOR_NUMBER == 0) { multiples++; sumOfNumbers += i; }
	}
	alert("Чисел кратных " + DIVISOR_NUMBER + " - " + multiples + ". Их сумма равна - " + sumOfNumbers);
}
