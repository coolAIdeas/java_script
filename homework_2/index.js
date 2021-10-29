let milage = prompt("Сколько километров проехала машина?");
N = Number(milage);
if (N === NaN) {
	console.log("Введите корректное число!")
} else {
	let wheel_diameter = prompt("Какой диаметр колёс?");
	D = Number(wheel_diameter);
	if (D === NaN) {
	console.log("Введите корректное число!")
	} else {
		let wheel_turnover = 2 * Math.PI * (D / 2)
		wheel_turnover = Math.round(wheel_turnover);
		alert("Одно колесо сделало "+ wheel_turnover + " оборотов. Все колёса вместе сделали: " + wheel_turnover * 4 + " оборотов");
	}
}

