// функция проверки массива на сортировку по возрастанию и убыванию
// list - рабочий массив
// function checksArray(list) {
//     let arraySortedAscending;
//     let arraySortedDescending;

//     // проверим массив на сортированность по возрастанию
//     for (let i = 0; i < list.length - 1; i++) {
//         if (list[i] > list[i + 1]) {
//             arraySortedAscending = false;
//         }
//     }

//     // проверим массив на сортированность по убыванию
//     for (let i = 0; i < list.length - 1; i++) {
//         if (list[i] < list[i + 1]) {
//             arraySortedAscending = false;
//         }
//     }

//     // если массив не возрастающий и не убывающий
//     if (arraySortedAscending === false && arraySortedDescending === false) {
//         return false;
//     }
//     return true;
// }
