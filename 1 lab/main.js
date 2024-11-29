let currentLanguage = 'ru'; 

const translations = {
    ru: {
        kem: 'ТУТ СТРАНА РОССИЯ ПО Г. МОСКВЕ',
        name: 'Георгий',
        surname: 'Иванов',
        lastName: 'Андреевич',
        sex: 'Муж.',
        buttonText: 'English version'
    },
    en: {
        kem: 'TYT RUSSIA PO G. MOSKVE',
        name: 'Georgiy',
        surname: 'Ivanov',
        lastName: 'Andreevich',
        sex: 'Male',
        buttonText: 'Русская версия'
    }
};

function changeLanguage() {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    updateText();
}

function updateText() {
    document.getElementById('kem').innerText = translations[currentLanguage].kem;
    document.getElementById('surname').innerText = translations[currentLanguage].surname;
    document.getElementById('name').innerText = translations[currentLanguage].name;
    document.getElementById('last-name').innerText = translations[currentLanguage].lastName;
    document.getElementById('sex').innerText = translations[currentLanguage].sex;
    document.getElementById('changeLang').innerText = translations[currentLanguage].buttonText;
}

// ТАБЛИЦА 

function generateTable() {
    const size = parseInt(document.getElementById('size').value);
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; 

    if (isNaN(size) || size < 1 || size > 100) {
        alert('Пожалуйста, введите корректный размер n.');
        return;
    }

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    for (let i = 0; i <= size; i++) {
        const th = document.createElement('th');
        th.innerText = i === 0 ? '' : i; 
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (let i = 1; i <= size; i++) {
        const row = document.createElement('tr');
        const firstCell = document.createElement('th');
        firstCell.innerText = i; 
        row.appendChild(firstCell);

        for (let j = 1; j <= size; j++) {
            const cell = document.createElement('td');
            cell.innerText = i * j; 
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}