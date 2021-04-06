// creating 1000 number consecutively
const list_number = []
for (var i = 1; i <= 1000; i++) {
    list_number.push(i)
}

// selecting "even" and "odd" numbers directly
const even_number = []
const odd_number = []
list_number.map(v => {
    if (v % 2 == 0) even_number.push(v)
    else odd_number.push(v)
})

// selecting numbers multiple by 5
const number_multiple_by_five = []
list_number.map(v => {
    if (v % 5 == 0) number_multiple_by_five.push(v)
})

// creating a function to decide whether prime number or not
function primeNumber(number) {
    if (number < 2) return false
    for (var i = 2; i < number; i++) {
        if (number % i === 0) return false
    }
    return true
}
// looping all number and selecting the number using the function
const prime_number = []
list_number.map(bilangan => {
    const hasil = primeNumber(bilangan)
    if (hasil == true) prime_number.push(bilangan)
})

console.log({ even_number });
console.log({ odd_number });
console.log({ number_multiple_by_five });
console.log({ prime_number });
console.log({ prime_number_less_than_100: prime_number.filter(v => { return v < 100 }) });


