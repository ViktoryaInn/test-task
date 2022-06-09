const sumOfTwoMin = require('./sumOfTwoMin')

/* eslint-disable no-undef */

test('array of numbers', () => {
    expect(sumOfTwoMin([0, -1, 9, -3, 7, 4])).toBe(-4)
})

test('array with strings and numbers', () => {
    function sumTwoMin() {
        sumOfTwoMin([0, '..ffff', 9, 'fbbfbf', 7, ''])
    }
    expect(sumTwoMin).toThrowError('В массиве есть нечисловое значение!')
})

test('array with strings', () => {
    function sumTwoMin() {
        sumOfTwoMin(['..ffff', 'fbbfbf', '', 'hyhyhyh'])
    }

    expect(sumTwoMin).toThrowError('В массиве есть нечисловое значение!')
})

test('empty array', () => {
    function sumTwoMin() {
        sumOfTwoMin([])
    }

    expect(sumTwoMin).toThrowError('Массив пустой!')
})

test('array with one number', () => {
    function sumTwoMin() {
        sumOfTwoMin([5])
    }

    expect(sumTwoMin).toThrowError('В массиве должно быть как минимум два числа!')
})

test('array with string-numbers', () => {
    let mockArr = ['-2', '-1', '0', '7', '10', '11', '5']
    expect(sumOfTwoMin(mockArr)).toBe(-3)
})

test('array with 100 000 elements', () => {
    let mockArr = [-2, -1]
    for (let i = 0; i < 100000; i++) {
        mockArr.push(i)
    }

    expect(sumOfTwoMin(mockArr)).toBe(-3)
})

test('array with 1 000 000 elements', () => {
    let mockArr = [-2, -1]
    for (let i = 0; i < 1000000; i++) {
        mockArr.push(i)
    }

    expect(sumOfTwoMin(mockArr)).toBe(-3)
})

test('array with 100 000 000 elements', () => {
    let mockArr = [-2, -1]
    for (let i = 0; i < 100000000; i++) {
        mockArr.push(i)
    }

    expect(sumOfTwoMin(mockArr)).toBe(-3)
})
