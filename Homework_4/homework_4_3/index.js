let word = prompt("Введите своё слово: ");
function wordReverser(inputWord) {
	let arr = new Array();
	arr = inputWord.split('');
	let invertedArr = new Array();
	for (i = 0; i < arr.length; i++) {
		invertedArr.unshift(arr[i]);
	}
	alert(invertedArr);
}
wordReverser(word);

