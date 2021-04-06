const arrayList = [3, 12, 4, 5, 8, 9]

// creating sort odd number function
const sortMethod = (items) => {
    // sorting from small to big dirrectly
    items.sort((a, b) => {
        return a - b
    })
    console.log(items);
}

sortMethod(arrayList)