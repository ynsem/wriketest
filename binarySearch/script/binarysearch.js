// функция бинарного поиска элемента в массиве
// возвращает позицию элемента
// value - искомый элемент
// list - рабочий массив

// идея вынести эту штуку модулем, но почему-то не работает
// import { checksArray } from './checksarray';

// временно (пока не починим модульность) добавим функцию проверки массива сюда
function checksArray(list) {
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] >= list[i + 1]) { // >= используем чтобы отсечь массивы с повторяющимеся элементами
            return false;
        }
    }

    return true;
}

function binarySearch(value, list) {


    let checksarray = checksArray(list);

    console.log(list);
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

    // проверка того, что рабочий массив сортирован по возрастанию
    // выйдет из цикла сразу как найдет неупорядоченные соседние элементы
    // дальнейший код закоментирован, и оставлен просто для понимания логики, а реализация вынесена в тдельную функцию,
    // т.о. при улучшении алгоритма проверки, переписывать ничего не придется

    if (checksarray) {
        while (found === false && firstElementPosition <= lastElementPosition) {
            // найдем середину массива
            // с учетом того, что массив может быть нечетной длины, используем округление до ближайшего меньшего
            // + защитимся от переполнения при очень большой длине массива
            middleElementPosition = Math.floor((firstElementPosition + (lastElementPosition - firstElementPosition) / 2));  
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

    } else return "Не подходит для бинарного поиска";
}
