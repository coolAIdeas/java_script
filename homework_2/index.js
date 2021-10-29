let milage = prompt("Сколько километров проехала машина?");
N = Number(milage);
if (isNaN(N)) {
	alert("Введите корректное число!")
} else {
	let wheel_diameter = prompt("Какой диаметр колёс?");
	D = Number(wheel_diameter);
	if (isNaN(wheel_diameter)) { 
	alert("Введите корректное число!")
	} else {
		let one_wheel_turnovers = (N * 1000) / (2* Math.PI*(D*0.0254)/2);
		let all_turnovers = 4 * one_wheel_turnovers;
		one_wheel_turnover = Math.round(one_wheel_turnovers);
		all_turnovers = Math.round(all_turnovers);
		alert("Одно колесо сделало "+ one_wheel_turnover + " оборотов. Все колёса вместе сделали: " + all_turnovers + " оборотов");
	}
}
