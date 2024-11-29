// 1 Задание
function checkPalindrome() {
    const inputString = document.getElementById('inputString').value;

    const cleanedString = inputString.replace(/\s+/g, '').toLowerCase(); // удаление пробелов
    const isPalindrome = cleanedString === cleanedString.split('').reverse().join('');

    if (isPalindrome) {
        alert(`"${inputString}" является палиндромом.`);
    } 
    else {
        alert(`"${inputString}" не является палиндромом.`);
    }
}

// 2 Задание
let secretNumber;
let attemptsLeft;
const maxAttempts = 5;

function startGame() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const resultDiv = document.getElementById('result');
    const attemptsDiv = document.getElementById('attempts');

    if (min >= max) {
        alert('Пожалуйста, убедитесь, что a < b.');
    }

    secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    attemptsLeft = maxAttempts;
    document.getElementById('gameArea').style.display = 'block';
    resultDiv.innerText = '';
    attemptsDiv.innerText = `Осталось попыток: ${attemptsLeft}`;
}

function makeGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const resultDiv = document.getElementById('result');
    const attemptsDiv = document.getElementById('attempts');

    if (isNaN(guess)) {
        resultDiv.innerText = 'Пожалуйста, введите корректное число.';
    }

    attemptsLeft--;

    if (guess === secretNumber) {
        alert(`Поздравляем! Вы угадали число ${secretNumber}!`);
    } 
    else if (attemptsLeft === 0) {
        alert(`Вы исчерпали все попытки. Загаданное число было ${secretNumber}.`);
    } 
    else {
        resultDiv.innerText = guess < secretNumber ? 'Слишком низко! Попробуйте снова.' : 'Слишком высоко! Попробуйте снова.';
        attemptsDiv.innerText = `Осталось попыток: ${attemptsLeft}`;
    }
}

// 3 Задание 
function findLowestAverage() {
    const namesInput = document.getElementById('names').value;
    const gradesInput = document.getElementById('grades').value;

    const names = namesInput.split(', ').map(name => name.trim());
    const grades = gradesInput.split(' ').map(grade => grade.trim());

    let lowestAverageName = '';
    let lowestAverageScore = Infinity;

    for (let i = 0; i < names.length; i++) {
        const scores = grades[i].split('-').map(Number);
        const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;

        if (averageScore < lowestAverageScore) {
            lowestAverageScore = averageScore;
            lowestAverageName = names[i];
        }
    }

    alert(`Самый отстающий ученик: ${lowestAverageName}`);
}

// 4 Задание
function findLowestCalorieProduct() {
    const productsInput = document.getElementById('products').value;
    const nutrientsInput = document.getElementById('nutrients').value;

    const products = productsInput.split(' ').map(product => product.trim());
    const nutrients = nutrientsInput.split(' ').map(nutrient => nutrient.trim());

    let lowestCalorieProduct = '';
    let lowestCalorieValue = Infinity;

    for (let i = 0; i < products.length; i++) {
        const [proteins, fats, carbohydrates] = nutrients[i].split('-').map(Number);
        const calorieValue = 0.4 * proteins + 0.3 * fats + 0.3 * carbohydrates;

        if (calorieValue < lowestCalorieValue) {
            lowestCalorieValue = calorieValue;
            lowestCalorieProduct = products[i];
        }
    }

    alert(`Самый низкокалорийный продукт: ${lowestCalorieProduct}`);
}

// 5 Задание
function analyzePrices() {
    const input = document.getElementById("input").value;
    const products = input.split(";").map(product => {
        const [name, ...prices] = product.trim().split(":");
        const averagePrice = prices.reduce((sum, price) => sum + parseFloat(price), 0) / prices.length;
        return { name: name.trim(), averagePrice: averagePrice };
    });
    products.sort((a, b) => {
        if (a.averagePrice === b.averagePrice) {
            return a.name.localeCompare(b.name);
        }
        return a.averagePrice - b.averagePrice;
    });
    let output = [];
    
    products.forEach(product => {
        output.push(product.name);
    });

    alert(output);
}

// 6 Задание
function calculateProfit() {
    let input = document.getElementById("inputArea").value;
    let lines = input.split("\n");
    let sales = {};
    let maxProfit = 0;
    let maxProfitProduct = "";

    for (let i = 0; i < lines.length; i++) {
        let parts = lines[i].split(",");
        let productName = parts[0].trim();
        let profit = parseInt(parts[1].trim());
        if (productName in sales) {
            sales[productName] += profit;
        } 
        else {
            sales[productName] = profit;
        }
        if (sales[productName] > maxProfit) {
            maxProfit = sales[productName];
            maxProfitProduct = productName;
        }
    }

    alert(`Товар с наибольшей прибылью: ${maxProfitProduct}, суммарная прибыль: ${maxProfit}`);
}

// 7 Задание
function processConcertsInput() {
    const inputText = document.getElementById("concertsArea").value;
    const concerts = inputText.split("\n");
    const groups = {};

    for (const concert of concerts) {
        const [group, date] = concert.split(",");
        const year = date.substring(7, 11);
        if (year === "2023") {
            if (groups[group]) {
                groups[group]++;
            } 
            else {
                groups[group] = 1;
            }
        }
    }
    console.log(concerts);
    let maxCount = 0;
    let maxGroup = "";
    for (const group in groups) {
        if (groups[group] > maxCount) {
            maxCount = groups[group];
            maxGroup = group;
        }
    }

    alert(`${maxGroup} ${maxCount}`);
}

// 8 Задание
const cities = ["Москва", "Санкт-Петербург", "Саратов", "Магадан", "Ярославль", "Самара", "Якутск"];

function findCities() {
    const input = document.getElementById('cityArea').value.trim();

    const result = cities.filter(city => city[0].toLowerCase() === input[0].toLowerCase());
    
    if (result.length > 0) {
        alert(`Города, начинающиеся с буквы '${input[0]}': ${result.join(", ")}`);
    } 
    else {
        alert("Такого города нет в списке");
    }
}