const text_1 = "Mammals"
const text_2 = "Bruiser build"

function soal_kelima(string) {
    // splitting the word into an array
    const split_text = string.toLowerCase().split('')

    // deleting 'space' element of the array
    split_text.filter((v, i) => {
        if (v == ' ') split_text.splice(i, 1)
    })

    // assigning the unique letters into one array
    const unique_text = []
    split_text.map(v => {
        if (!unique_text.includes(v)) unique_text.push(v)
    })

    // these unique letters are used to be properties of an object, and to find how many char of each letters
    const hasil = unique_text.map(v => {
        let obj1 = new Object;
        function hitungJumlah() {
            let how_many = []
            split_text.map(huruf => {
                if (huruf == v) how_many.push(huruf)
            })
            return how_many.length
        }
        obj1[v] = '*'.repeat(hitungJumlah())
        return obj1
    })
    // the result is return in an array with many object, so we should unite it
    var resultObject = hasil.reduce(function (result, currentObject) {
        for (var key in currentObject) {
            if (currentObject.hasOwnProperty(key)) {
                result[key] = currentObject[key];
            }
        }
        return result;
    }, {});
    return resultObject
}
console.log(soal_kelima(text_1));
console.log(soal_kelima(text_2));