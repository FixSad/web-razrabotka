document.addEventListener("DOMContentLoaded", function() {
    const url = 'http://universities.hipolabs.com/search';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            fillTable(data);
        })
        .catch(error => {
            console.error(error);
        });
});

function fillTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; 
    let counter = 0;
    try{
    data.forEach(university => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${university.name}</td>
            <td>${university.domains[0]}</td>
            <td>${university.country}</td>
        `;
        tableBody.appendChild(row);
        counter += 1;
        if(counter == 15){
            throw new Exception("Time to end the loop");
        }
    });
    }
    catch(e){
        console.log("Loop has ended");
    }
}

function sortTable(columnIndex) {
    const table = document.getElementById("universityTable");
    const rows = Array.from(table.rows).slice(1);
    const isAscending = table.getAttribute('data-sort-order') === 'asc';
    
    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText;
        const bText = b.cells[columnIndex].innerText;

        return isAscending ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });

    rows.forEach(row => table.appendChild(row)); 
    table.setAttribute('data-sort-order', isAscending ? 'desc' : 'asc'); 
}