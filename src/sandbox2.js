//Задание 1
const printLenght = function () {
    const array = [1, '', 2, 3, 2, 6, 7, 8, 0, 0, '123123123', null, [], {}];

    const chetnieChisla = array.filter(
        n => typeof n === 'number' && n && n % 2 === 0
    );
    const neChetnieChisla = array.filter(
        n => typeof n === 'number' && n && n % 2 !== 0
    );
    const nuli = array.filter(n => typeof n === 'number' && n === 0);

    return {
        'Чётные числа': chetnieChisla.length,
        'Не чётные числа': neChetnieChisla.length,
        'Нули': nuli.length,
    };
};
console.log(printLenght());

//Задание 2
function checkInteger(n) {
    if (n > 1000) return 'Данные не верны';
    if (n === 0 || n === 1) return 'Не простое число';

    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
        if (n % i === 0) {
            return 'Составное число';
        }
        i +=1;
    }

    return 'Простое число';
}


console.log(100, checkInteger(100));
console.log(1001, checkInteger(1001));
console.log(2, checkInteger(2));
console.log(1, checkInteger(1));
console.log(0, checkInteger(0));

//Задание 3
function dich (x) {
    return (y) => x + y;
};
console.log(dich(5)(7));

//Задание 4
function intUser(a,b) {
    let i = setInterval(() => {
        console.log(a++);
        if (a > b) clearInterval(i);
    }, 1000)
}

intUser(5, 10);

//Задание 5
function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
var x = prompt("x?", '');
var n = prompt("n?", '');
if (n <= 1) {
    alert('Степень ' + n +
        'не поддерживается, введите целую степень, большую 1'
    );
} else {
    alert( pow(x, n) );
}