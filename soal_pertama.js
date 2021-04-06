const fs = require('fs')

fs.readFile('./soal.csv', (err, data) => {
    if (err) console.log(err);


    //spliting the raw data into array
    const arr = data.toString().split('\n')
    const cleanData = arr.map((v, i) => {
        return arr[i].split(',')
    })
    //assigning the first index of array as header to an object
    const result = []
    for (var i = 1; i < cleanData.length; i++) {
        var myObj = new Object;
        myObj[cleanData[0][0].toLowerCase().trim()] = cleanData[i][0]
        myObj[cleanData[0][1].toLowerCase().trim()] = cleanData[i][1]
        myObj[cleanData[0][2].toLowerCase().trim()] = cleanData[i][2]
        result.push(myObj)
    }
    //sorting data based on the price
    result.sort((a, b) => {
        return a.price - b.price
    })

    // converting price to currency Rp
    const baru = result.map(v => {
        var number_bilangan = v.price.trim()
        var sisa = number_bilangan.length % 3
        var rupiah = number_bilangan.substr(0, sisa)
        var ribuan = number_bilangan.substr(sisa).match(/\d{3}/g)

        var separator = sisa ? '.' : ''
        rupiah = "Rp " + rupiah + separator + ribuan.join('.')
        v.price = rupiah
        return v

    })
    console.log(JSON.stringify(baru));
});