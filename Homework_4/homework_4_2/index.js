const MIN_VALUE = 500;
const MAX_VALUE = 888;

let arr = new Array();

for (i = MIN_VALUE; i <= MAX_VALUE; i++) 
{
	if (i % 2 === 0) 
	{
		arr[i] = i;
		console.log(arr[i]);
	}
}