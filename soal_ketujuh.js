const numbers = [9, 4, 2, 4, 1, 5, 3, 0]

// creating sorting function
function sort_odd(numbers) {
    // each odd number will be stored in new array together with the index
    const new_odd = []
    const indexs = []
    numbers.map((v, i) => {
        if (v % 2 != 0) {
            new_odd.push(v)
            indexs.push(i)
        }
        // array of odd number is sorted from small to big
        new_odd.sort((a, b) => {
            return a - b
        })
    })
    // replacing element of odd number by using indexs stored in array
    indexs.map((v, i) => {
        return numbers[v] = new_odd[i]
    })
    console.log(numbers)
}
sort_odd(numbers)