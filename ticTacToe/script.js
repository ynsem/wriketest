let cells = getFieldCells('#field td');
let gamer = 'X';
prepareField(cells);

function getFieldCells(selector) {
    return document.querySelectorAll(selector);
}

function prepareField(cells) {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', startsNextMove);
    }
}

function startsNextMove() {
    this.innerHTML = gamer;

    if (gamer == 'X') {
        gamer = 'O';
    } else {
        gamer = 'X';
    }

    this.removeEventListener('click', startsNextMove);

    lookingWinner(cells);
}

function endingGame(cells) {
    stopingGame(cells);
}

function stopingGame(cells) {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', startsNextMove);
    }
}

function lookingWinner(cells) {

    let winCombinations = [
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
            alert('Вы выиграли');
        }
    }
}