'use strict';

// функция проверки массива на сортировку по возрастанию и убыванию
// вернет true если массив сортирован или состоит из одинаковых элементов
// list - рабочий массив
function checksArray(list) {
    let arraySortedAscending;
    let arraySortedDescending;

    // проверим массив на сортированность по возрастанию
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] > list[i + 1]) {
            arraySortedAscending = false;
        }
    }

    // проверим массив на сортированность по убыванию
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] < list[i + 1]) {
            arraySortedDescending = false;
        }
    }

    // если массив не возрастающий и не убывающий
    if (arraySortedAscending === false && arraySortedDescending === false) {
        return false;
    }

    return true;
}



// функция бинарного поиска элемента в массиве
// возвращает позицию элемента
// value - искомый элемент
// list - рабочий массив
function binarySearch(value, list) {

    let checksarray = checksArray(list);

    // позиция искомого элемента
    let position = -1;

    // позиция первого (нулевого) элемента отрезка
    let firstElementPosition = 0;

    // позиция последнего элемента отрезка
    let lastElementPosition = list.length - 1;

    // позиция среднего элемента отрезка
    let middleElementPosition;

    // флаг цикла
    let found = false;

    // проверка на сортированность
    if (checksarray) {

        while (found === false && firstElementPosition <= lastElementPosition) {
            // найдем середину массива
            // с учетом того, что массив может быть нечетной длины, используем округление до ближайшего меньшего
            // + защитимся от переполнения при очень большой длине массива
            middleElementPosition = Math.floor((firstElementPosition + (lastElementPosition - firstElementPosition) / 2));
            // искомый элемент в середине массива
            if (list[middleElementPosition] == value) {
                position = middleElementPosition;
                found = true;
            } else {
                // 1я ветка - работает с массивом сортированным по возрастанию, или из одинаковых элементов
                if (list[0] <= list[list.length - 1]) {
                    // искомый элемент в левой части массива
                    if (value < list[middleElementPosition]) {
                        lastElementPosition = middleElementPosition - 1;
                    } else { // искомый элемент в правой части массива
                        firstElementPosition = middleElementPosition + 1;
                    }
                } else {          // 2я ветка - работает с массивом сортированным по убыванию
                    if (value > list[middleElementPosition]) {
                        lastElementPosition = middleElementPosition - 1;
                    }
                    // искомый элемент в правой части массива
                    else {
                        firstElementPosition = middleElementPosition + 1;
                    }
                }
            }
        }
    }

    return position;
}

