//document.getElementById('parent').innerHTML = '<b>Новое содержимое</b>';

function getDigit(number, n) {
	return Math.floor((number / Math.pow(10, n - 1)) % 10);
}

function checkInput(str) {
	let pattern = /^\d+$/;
	return pattern.test(str);  // returns a boolean
}

function check1(numbers) {
	let result = false;
	for (let i=0; i<6; i++) {
		let isBreak = false;
		if (numbers[i] %2 != 0 && numbers[i+1] %2 != 0 && numbers[i+2] %2 == 0) {
			for (let j = i+3; j<7; j++) {
				if (numbers[j] % 2 == 0) {					
					continue;
				}
				if (numbers[j] % 2 != 0 && numbers[j+1] % 2 != 0) {					
					result = true;
					isBreak = true;
				} else {
					isBreak = true;
				}
			}
		}
		if (isBreak) {
			break;
		}
	}
	return result
}

function check2(numbers) {
	let result = false;
	for (let i=0; i<6; i++) {
		let isBreak = false;
		if (numbers[i] %2 != 0 && 
			numbers[i+1] %2 != 0 && 
			numbers[i+2] %2 == 0 && 
			numbers[i] < numbers[i+1]) {
			for (let j = i+3; j<7; j++) {
				if (numbers[j] % 2 == 0) {					
					continue;
				}
				if (numbers[j] % 2 != 0 && 
					numbers[j+1] % 2 != 0 && 
					numbers[j] < numbers[j+1]) {
					result = true;
					isBreak = true;
				} else {
					isBreak = true;
				}
			}
		}
		if (isBreak) {
			break;
		}
	}
	return result
}

function check3(numbers) {
	let even = 0;
	let odd = 0;
	for (let i=0; i<8; i++) {
		if (numbers[i] % 2 == 0) {
			even += numbers[i];
		} else {
			odd += numbers[i];
		}
	}
	if (even > odd) {
		return true;
	} else {
		return false;
	}	
}

function checkPromo(number) {
	let numbers = [getDigit(number, 8), getDigit(number, 7),
				getDigit(number, 6), getDigit(number, 5),
				getDigit(number, 4), getDigit(number, 3),
				getDigit(number, 2), getDigit(number, 1)]
	if (check2(numbers)) {
		return 2000;
	}
	if (check1(numbers)) {
		return 1000;
	}	
	if (check3(numbers)) {
		return 100;
	}	
	return 0;
}
	
$(document).ready(function() {
    $("#btnSubmit").click(function(){        
		document.getElementById('other').innerHTML = '';
		let promo = document.getElementById('txt-input').value;		
		if (!checkInput(promo) || promo.length != 8) {			
			document.getElementById('other').innerHTML = '<b>Ошибка ввода, необходимо ввести 8 цифр</b>';
		} else {
			let result = checkPromo(promo)
			document.getElementById('other').innerHTML = '<b>Скидка промокода - ' + result + '$.</b>';
		}
		
    }); 
});