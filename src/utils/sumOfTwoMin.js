export function sumOfTwoMin(arr = []){
    arr = arr
        .map(e => e !== '' && Number(e))
        .filter(e => typeof e === 'number' && !isNaN(e))

    let result = 0
    switch (true) {
        case arr.length === 0:
            result = 0
            break;

        case arr.length === 1:
            result = arr[0]
            break;

        case arr.length > 1:
            arr.sort(function(a, b) {
                return a-b
            })
            result = arr[0] + arr[1]
            break;

    }

    return result
}

module.exports = sumOfTwoMin
