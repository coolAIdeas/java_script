let arrayLenght = prompt("Введите размер массива:");
let arr = new Array();
arr.lenght = arrayLenght;
for(i = 0; i < arrayLenght; i++) 
{ 
	arr[i] = prompt("Введите элемент № " + i); 
}
function get_min(arr)
{
	minValue = arr[0];
	for (i = 0; i < arrayLenght; i++) 
	{
		if (minValue > arr[i]) { minValue = arr[i]; }
	}
	alert(`Минимальное значение: (${minValue})`);
}



get_min(arr);