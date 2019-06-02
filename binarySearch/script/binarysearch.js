// функция бинарного поиска элемента в массиве
// возвращает позицию элемента
// value - искомый элемент
// list - рабочий массив

function binarySearch(value, list) {

    // позиция искомого элемента
    let itemPosition = -1;

    // позиция первого (нулевого) элемента массива
    let firstElementPosition = 0;
    // позиция последнего элемента массива
    let lastElementPosition = list.length - 1;
    // позиция среднего элемента массива
    let middleElementPosition;

    // флаг цикла
    let found = false;

    // найдем середину массива
    // с учетом того, что массив может быть нечетной длины, используем округление до ближайшего меньшего
    middleElementPosition =
        Math.floor((firstElementPosition + lastElementPosition) / 2);

    while (found === false && firstElementPosition <= lastElementPosition) {
        // искомый элемент в середине массива
        if (middleElementPosition == value) {
            itemPosition = middleElementPosition;
            found = true;
        } else {
            // искомый элемент в левой части массива
            if (list[middleElementPosition] > value) {
                lastElementPosition = middleElementPosition - 1;
            }
            // искомый элемент в правой части массива
            else {
                firstElementPosition = middleElementPosition + 1;
            }
        }
    }

    return itemPosition;
}

let a = 5;
let b = [0, 1, 2, 3 , 4, 5, 6, 7, 8];

console.log(binarySearch(a, b));
