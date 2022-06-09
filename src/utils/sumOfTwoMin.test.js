const sumOfTwoMin = require('./sumOfTwoMin')

// eslint-disable-next-line no-undef
test('regular array of numbers', () => {
    // eslint-disable-next-line no-undef
    expect(sumOfTwoMin([0, -1, 9, -3, 7, 4])).toBe(-4)
})

// eslint-disable-next-line no-undef
test('array with strings and numbers', () => {
    // eslint-disable-next-line no-undef
    expect(sumOfTwoMin([0, '..ffff', 9, 'fbbfbf', 7, ''])).toBe(7)
})

// eslint-disable-next-line no-undef
test('array with strings', () => {
    // eslint-disable-next-line no-undef
    expect(sumOfTwoMin(['..ffff', 'fbbfbf', '', 'hyhyhyh'])).toBe(0)
})

// eslint-disable-next-line no-undef
test('empty array', () => {
    // eslint-disable-next-line no-undef
    expect(sumOfTwoMin([])).toBe(0)
})

// eslint-disable-next-line no-undef
test('array with 100 000 elements', () => {
    let mockArr = [-2, -1]
    for (let i = 0; i < 100000; i++) {
        mockArr.push(i)
    }

    // eslint-disable-next-line no-undef
    expect(sumOfTwoMin(mockArr)).toBe(-3)
})

// eslint-disable-next-line no-undef
test('array with 1 000 000 elements', () => {
    let mockArr = [-2, -1]
    for (let i = 0; i < 1000000; i++) {
        mockArr.push(i)
    }

    // eslint-disable-next-line no-undef
    expect(sumOfTwoMin(mockArr)).toBe(-3)
})

// eslint-disable-next-line no-undef
test('array with 100 000 000 elements', () => {
    console.log('before')
    let mockArr = [-2, -1]
    for (let i = 0; i < 100000000; i++) {
        mockArr.push(i)
    }

    console.log('length--', mockArr.length)

    // eslint-disable-next-line no-undef
    expect(sumOfTwoMin(mockArr)).toBe(-3)
})
