// 1 задача
function checkTriangleExistence(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

function checkTriangle() {
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        alert('Пожалуйста, введите корректные длины сторон.');
    }

    if (checkTriangleExistence(a, b, c)) {
        alert('Треугольник с такими сторонами существует.');
    } else {
        alert('Треугольник с такими сторонами не существует.');
    }
}

// 2 задача
const calculator = {
    base: 0,
    power: function(Y) {
        return Math.pow(Y - 2, Y);
    }
};

function calculate() {
    const Y = parseFloat(document.getElementById('inputY').value);

    if (isNaN(Y) || Y < 3) {
        alert('Пожалуйста, введите число Y, большее или равное 3.');
    }
    else{
        const result = calculator.power(Y);
        alert(`Результат: (${Y} - 2) в степени ${Y} = ${result}`);
    }
}

// 3 задача
let balance = 0;

function performTransaction() {
    const amount = parseFloat(document.getElementById('amount').value);
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(amount) || amount <= 0) {
    alert('Пожалуйста, введите корректную сумму.');
        return;
    }

    if (operation === 'deposit') {
        balance += amount;
        alert(`Вы внесли ${amount} на счет. Текущий баланс: ${balance}`);
    } 
    else if (operation === 'withdraw') {
        if (amount > balance) {
            alert('Недостаточно средств на счете для снятия.');
        } 
        else {
            balance -= amount;
            alert(`Вы сняли ${amount} со счета. Текущий баланс: ${balance}`);
        }
    }
    const blance = document.getElementById('blance').value = balance;
}