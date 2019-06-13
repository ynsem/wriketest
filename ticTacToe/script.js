const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', restartGame);

const currentGamerElem = document.querySelector('#current-gamer');

const cells = getFieldCells('#field td');
let currentGamer = getDefaultGamer();
prepareField(cells);

// логика игры

// подготавливает поле, вешает листенер на каждую ячейку
function prepareField() {
    activateCell(cells)
    
    currentGamer = getDefaultGamer();
    showCurrentGamer(currentGamer, currentGamerElem);
}

// основная игровая функция, производит манипуляции с текущей ячейкой, и проверяет есть ли победитель
function nextStep() {
    const cell = this;
    fillCell(cell, currentGamer);
    currentGamer = getNextGamer(currentGamer);

    showCurrentGamer(currentGamer, currentGamerElem);

    deactivateCell(cell);

    var winner = checkWinner(cells);
    if (winner !== false || checkFieldFilled(cells)) {
        endGame(cells, winner, currentGamerElem);
    }
}

// вызывается при завершении игры, снимает листнеры, показывает победителя
function endGame(cells, winner, currentGamerElem) {
    stopGame(cells);
    showWinner(winner);
    showCurrentGamer('___', currentGamerElem);
}

// вызывается при рестарте кнопкой
function restartGame() {
    prepareField();
}

// вспомогательные функции

// показать победителя, или ничью
function showWinner(winner) {
    if (winner !== false) {
        alert(winner);
    } else {
        alert('Ничья');
    }
}

// отрисовка текущего игрока
function showCurrentGamer(name, elem) {
    elem.innerHTML = name;
}

// установка игрока по умолчанию
function getDefaultGamer() {
    return 'X';
}

// передает ход
function getNextGamer(currentGamer) {
    if (currentGamer == 'X') {
        return 'O';
    } else {
        return 'X';
    }
}

// заполняет ячейку
function fillCell(cell, content) {
    cell.innerHTML = content;
}

// снимает листенер с ячейки
function deactivateCell(cell) {
    cell.removeEventListener('click', nextStep);
}

// вешает листенер на ячейку
function activateCell(cells) {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].addEventListener('click', nextStep);
    }
}

// отдает игровое поле
function getFieldCells(selector) {
    return document.querySelectorAll(selector);
}

// снимает листнеры с поля
function stopGame(cells) {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', nextStep);
    }
}

// проверяет победителя
function checkWinner(cells) {

    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winCombinations.length; i++) {
        let winning = winCombinations[i];

        if (cells[winning[0]].innerHTML == cells[winning[1]].innerHTML &&
            cells[winning[1]].innerHTML == cells[winning[2]].innerHTML &&
            cells[winning[0]].innerHTML != '') {

            return cells[winning[0]].innerHTML;
        }
    }

    return false;
}

// проверяет конец игры (если все поля заполнены вернет true)
function checkFieldFilled(cells) {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML == '') {
            return false;
        }
    }

    return true;
}