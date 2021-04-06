const count_word = [`aku`, `ingin`, `dapat`]

const lagu = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`

// createing array section
const word_aku = []
const word_ingin = []
const word_dapat = []

// splitting each sentence per lines
const baris = lagu.split('\n')
baris.map(sentence => {
    //splitting each word per lines
    const word_per_baris = sentence.split(' ')
    // filtering each word inside list of words and pushing the word into new array
    word_per_baris.map(word => {
        if (word.toLowerCase() == 'aku')
            word_aku.push('aku')
        if (word.toLowerCase() == 'ingin')
            word_ingin.push('ingin')
        if (word.toLowerCase() == 'dapat')
            word_dapat.push('dapat')

    })
})
// finally, count how many words each array section
console.log(`Jumlah kata "aku" = ` + word_aku.length);
console.log(`Jumlah kata "ingin" = ` + word_ingin.length);
console.log(`Jumlah kata "dapat" = ` + word_dapat.length);
