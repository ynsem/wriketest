// случаи тестирования

describe("checksArraySorted", function () {
    it("Возвращает true", function () {
        assert.equal(checksArray([0, 1, 2, 2, 4, 5, 7, 7, 8, 9]), true);
    });
    it("Возвращает true", function () {
        assert.equal(checksArray([9, 8, 8, 6, 5, 3, 3, 2, 1, 0]), true);
    });
    it("Возвращает false", function () {
        assert.equal(checksArray([9, 8, 10, 6, 5, 3, 3, 2, 1, 0]), false);
    });
});

describe("binarySearch", function () {

    it("Возвращает позицию элемента, если нашел в сортированном по возрастанию массиве", function () {
        assert.equal(binarySearch(3, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 3);
    });
    it("Возвращает -1, если не нашел в сортированном по возрастанию массиве", function () {
        assert.equal(binarySearch(99, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), -1);
    });
    it("Возвращает позицию элемента, если нашел в сортированном по убыванию массиве", function () {
        assert.equal(binarySearch(1, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 8);
    });
    it("Возвращает -1, если не нашел в сортированном по убыванию массиве", function () {
        assert.equal(binarySearch(99, [9, 8, 7, 6, 5, 4, 3, 2, 1]), -1);
    });
    it("Возвращает позицию элемента, если он первый", function () {
        assert.equal(binarySearch(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 0);
    });
    it("Возвращает позицию элемента, если он последний", function () {
        assert.equal(binarySearch(4, [9, 8, 7, 7, 4, 4, 2, 1, 0, -5]), 4);
    });
    it("Возвращает -1 если массив пустой", function () {
        assert.equal(binarySearch(5, []), -1);
    });
    it("Возвращает -1 если массив несортирован (вариант 1)", function () {
        assert.equal(binarySearch(0, [0, 2, 1, 9, 7, 18, 5, 4]), -1);
    });
    it("Возвращает позицию элемента, если в массиве 1 элемент", function () {
        assert.equal(binarySearch(0, [0]), 0);
    });
    it("Возвращает позицию элемента, если в массиве 2 элемента", function () {
        assert.equal(binarySearch(1, [0, 1]), 1);
    });
});