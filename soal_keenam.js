const list_letters_first = ["c", "d", "e", "g", "h"]
const list_letters_second = ["X", "Z"]

// creating function to find missing word
function findMissingLetter(letters) {
    // creating letters database
    var letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var alphabet = letter.split('')

    // finding index of letter from database
    var list_index = []
    alphabet.map((v, i) => {
        if (letters.includes(v)) {
            list_index.push(i)
        }
    })
    // then finding index missing by looking the difference between value index
    for (var i = 0; i < list_index.length; i++) {
        var next = list_index[i + 1]
        var current = list_index[i]
        if (next - current > 1) {
            var letter_next_missing = letters[i].toString()
            var index_missing = alphabet.indexOf(letter_next_missing) + 1
            console.log(alphabet[index_missing]);
        }
    }
}

findMissingLetter(list_letters_first)
findMissingLetter(list_letters_second)
