// функция бинарного поиска элемента в массиве
// возвращает позицию элемента
// value - искомый элемент
// list - рабочий массив

function binarySearch(value, list) {
    console.log(list);
    // позиция искомого элемента
    let position = -1;

    // позиция первого (нулевого) элемента отрезка
    let firstElementPosition = 0;
    // позиция последнего элемента массива
    let lastElementPosition = list.length - 1;
    // позиция среднего элемента отрезка
    let middleElementPosition;

    // флаг цикла
    let found = false;

    while (found === false && firstElementPosition <= lastElementPosition) {
        // найдем середину массива
        // с учетом того, что массив может быть нечетной длины, используем округление до ближайшего меньшего
        middleElementPosition = Math.floor((firstElementPosition + lastElementPosition) / 2);
        console.log(middleElementPosition); //для отладки
        // искомый элемент в середине массива
        if (middleElementPosition == value) {
            position = middleElementPosition;
            found = true;
        } else {
            // искомый элемент в левой части массива
            if (list[middleElementPosition] > value) {
                lastElementPosition = middleElementPosition - 1;
                console.log('last ' + lastElementPosition);
            }
            // искомый элемент в правой части массива
            else {
                firstElementPosition = middleElementPosition + 1;
                console.log('first ' + firstElementPosition);
            }
        }
        console.log('-----')
    }

    return position;
}
