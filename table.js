"use strict";
let log = console.log;
let thead = document.querySelector('thead');
let tbody = document.querySelector('tbody');
let tfoot = document.querySelector('tfoot');
let rowsInp = document.querySelector('#row');
let cellsInp = document.querySelector('#cell');
let headCells = document.querySelector('#cell');
let footCells = document.querySelector('#cell');

let fillHead = (row, cell) => {
    thead.innerHTML = '';
    for(let i = 1; i <= row; i++) {
        let tr = document.createElement('tr');
        thead.appendChild(tr);
        for(let i = 1; i <= cell; i++) {
            let th = document.createElement('th');
            th.textContent = i;
            tr.appendChild(th);
        }
    }
}
headCells.addEventListener('input', () => fillHead(1, headCells.value));

let fillBody = (row, cell) => {
    tbody.innerHTML = '';
    for(let i = 1; i <= row; i++) {
        let  tr = document.createElement('tr');
        tbody.appendChild(tr);
        tr.innerHTML = '';
        for(let i = 1; i <= cell; i++) {
            let td = document.createElement('td');
            td.textContent = i;
            tr.appendChild(td);
        }
    }
}
cellsInp.addEventListener('input', () => fillBody(rowsInp.value, cellsInp.value));
rowsInp.addEventListener('input', () => fillBody(rowsInp.value, cellsInp.value));

let fillFoot = (row, cell) => {
    tfoot.innerHTML = '';
    for(let i = 1; i <= row; i++) {
        let tr = document.createElement('tr');
        tfoot.appendChild(tr);
        for(let i = 1; i <= cell; i++) {
            let td = document.createElement('td');
            td.textContent = i;
            td.colspan = '2';
            tr.appendChild(td);
            td.addEventListener('click', function() {
                this.remove();
            });
        }
    }
}
footCells.addEventListener('input', () => fillFoot(1, headCells.value));

