// случаи тестирования
// 
// 1. Возвращает позицию элемента, если нашел в сортированном массиве из четного числа элементов (левая часть)
// 2. Возвращает -1, если не нашел в сортированном массиве из четного числа элементов
// 3. Возвращает позицию элемента, если нашел в сортированном массиве из нечетного числа элементов (правая часть)
// 4. Возвращает -1, если не нашел в сортированном массиве из нечетного числа элементов
// 5. Возвращает позицию элемента, если он первый, в сортированном массиве из четного числа элементов
// 6. Возвращает позицию элемента, если он первый, в сортированном массиве из нечетного числа элементов
// 7. Возвращает позицию элемента, если он последний, в сортированном массиве из четного числа элементов
// 8. Возвращает позицию элемента, если он последний, в сортированном массиве из нечетного числа элементов
// 9. Возвращает позицию элемента, если он средний, в сортированном массиве из нечетного числа элементов
// 10. Возвращает -1 если массив пустой
// 11. Возвращает -1 если массив несортирован
// 12. Возвращает позицию элемента, если в массиве 1 элемент
// 13. Возвращает позицию элемента, если в массиве 2 элемента
// 14. Возвращает позицию элемента, если в массиве есть повторяющиеся элементы


describe("binarySearch", function () {
    // 1
    it("Возвращает позицию элемента, если нашел в сортированном массиве из четного числа элементов (левая часть)", function () {
        assert.equal(binarySearch(3, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 3);
    });
    // 2
    it("Возвращает -1, если не нашел в сортированном массиве из четного числа элементов", function () {
        assert.equal(binarySearch(99, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), -1);
    });
    // 3
    it("Возвращает позицию элемента, если нашел в сортированном массиве из нечетного числа элементов (правая часть)", function () {
        assert.equal(binarySearch(7, [0, 1, 2, 3, 4, 5, 6, 7, 8]), 7);
    });
    // 4
    it("Возвращает -1, если не нашел в сортированном массиве из нечетного числа элементов", function () {
        assert.equal(binarySearch(99, [0, 1, 2, 3, 4, 5, 6, 7, 8]), -1);
    });
    // 5
    it("Возвращает позицию элемента, если он первый, в сортированном массиве из четного числа элементов", function () {
        assert.equal(binarySearch(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 0);
    });
    // 6
    it("Возвращает позицию элемента, если он первый, в сортированном массиве из нечетного числа элементов", function () {
        assert.equal(binarySearch(0, [0, 1, 2, 3, 4, 5, 6, 7, 8]), 0);
    });
    // 7
    it("Возвращает позицию элемента, если он последний, в сортированном массиве из четного числа элементов", function () {
        assert.equal(binarySearch(9, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 9);
    });
    // 8
    it("Возвращает позицию элемента, если он последний, в сортированном массиве из нечетного числа элементов", function () {
        assert.equal(binarySearch(8, [0, 1, 2, 3, 4, 5, 6, 7, 8]), 8);
    });
    // 9
    it("Возвращает позицию элемента, если он средний, в сортированном массиве из нечетного числа элементов", function () {
        assert.equal(binarySearch(4, [0, 1, 2, 3, 4, 5, 6, 7, 8]), 4);
    });
    // 10
    it("Возвращает -1 если массив пустой", function () {
        assert.equal(binarySearch(5, []), -1);
    });
    // 11
    it("Возвращает -1 если массив несортирован (вариант 1)", function () {
        assert.equal(binarySearch(2, [0, 2, 1, 9, 7, 18, 5, 4]), -1);
    });
    it("Возвращает -1 если массив несортирован (вариант 2)", function () {
        assert.equal(binarySearch(18, [0, 2, 1, 9, 7, 18, 5, 4]), -1);
    });
    // 12
    it("Возвращает позицию элемента, если в массиве 1 элемент", function () {
        assert.equal(binarySearch(0, [0]), 0);
    });
    // 13
    it("Возвращает позицию элемента, если в массиве 2 элемента", function () {
        assert.equal(binarySearch(1, [0, 1]), 1);
    });
    // // 14
    // it("Возвращает текстовое сообщение если в массиве есть повторяющиеся элементы", function () {
    //     assert.equal(binarySearch(2, [0, 1, 1, 2, 3, 4, 5, 6]), "Не подходит для бинарного поиска");
    // });
    // it("Возвращает текстовое сообщение если в массиве есть повторяющиеся элементы", function () {
    //     assert.equal(binarySearch(1, [0, 1, 1, 2, 3, 4, 5, 6]), "Не подходит для бинарного поиска");
    // });
});