function sumOfTwoMin(arr = []) {
    const checkOnNumber = arr.some(e => isNaN(e))

    if(checkOnNumber) {
        throw new Error('В массиве есть нечисловое значение!')
    }

    if(arr.length === 0) {
        throw new Error('Массив пустой!')
    }

    if(arr.length < 2) {
        throw new Error('В массиве должно быть как минимум два числа!')
    }

    let minA = Number(arr[0])
    let minB = Number(arr[1])
    for(let num of arr) {
        if (num >= minA && num >= minB) {
            continue
        }

        if (num < minA && minA < minB) {
            minB = Number(num)
        }

        if (num < minB && minB < minA) {
            minA = Number(num)
        }
    }

    return minA + minB
}

module.exports = sumOfTwoMin
