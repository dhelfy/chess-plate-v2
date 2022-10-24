function createChessPlate () {
    let tbody = document.querySelector('tbody')
    for (let i = 0; i < 8; i++) {
        let tr = document.createElement('tr');
        for (let i = 0; i < 8; i++) {
            let td = document.createElement('td');
            tr.append(td);
        }
        tbody.append(tr);
    }
}

createChessPlate();

let allRows = document.querySelectorAll('tr');

function paintCells (){
    allRows.forEach(function(row, index, list){
        let allCells = row.querySelectorAll('td');
    
        allCells.forEach(function(cell, i, list){
            if (i % 2 == 0 && index % 2 == 0 || i % 2 !== 0 && index % 2 !== 0) {
                cell.classList.add('black-cell')
            }
        })
    })
    
}

paintCells();

let chessPlateCells = document.querySelectorAll('td');

function makeChessPlateCellsClickable () {
    chessPlateCells.forEach(function(cell){
        cell.addEventListener('click', function() {
            cell.classList.toggle("black-cell");
         })
    })
}

makeChessPlateCellsClickable();

let clear_button = document.getElementById('clear-button')

clear_button.onclick = function clearChessPlate () {
        let rows = document.querySelectorAll('tr');
        rows.forEach(function(row, i){
            row.parentNode.removeChild(row)        
        }) 
};

let create_button = document.getElementById('create-button')

create_button.onclick = function createCustomChessPlate () {
    let tbody = document.querySelector('tbody');
    let rows_value = document.getElementById('input-rows').value;
    let cells_value = document.getElementById('input-cells').value;
    
    for (let i = 0; i < rows_value; i++) {
        let tr = document.createElement('tr');

        for (let i = 0; i < cells_value; i++) {
            let td = document.createElement('td');
            td.addEventListener('click', function() {
                td.classList.toggle("black-cell");
             })
            tr.append(td);
        }
        tbody.append(tr);
    }

    function paintCustomChessPlate (){
        let rows = document.querySelectorAll('tr')
        rows.forEach(function(row, index, list){
            let allCells = row.querySelectorAll('td');
        
            allCells.forEach(function(cell, i, list){
                if (i % 2 == 0 && index % 2 == 0 || i % 2 !== 0 && index % 2 !== 0) {
                    cell.classList.add('black-cell')
                }
            })
        })
        
    }

    paintCustomChessPlate()
}