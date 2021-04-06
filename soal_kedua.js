const censor_word = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum']

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

// separating each sentence each line
const split_sentence = paragraph.split('\n')
//separating each sentence per comma sign
const split_comma = split_sentence.map(v => {
    return v.split(',')
})

// VERSION 1
// find censor word in each word of paragraph
// const final = split_comma.map(sentence => {
//     var join_sentence = sentence.map(comma => {
//         var per_comma = comma.split(' ')
//         let join_comma = per_comma.map((word, i) => {

//             if (censor_word.includes(word)) {
//                 return per_comma[i] = '*'.repeat(word.length)
//             } else {
//                 return per_comma[i]
//             }
//         })
//         return join_comma.join(' ');
//     })
//     return join_sentence.join(',')
// })
// console.log(final.join(' '));

// VERSION 2
const result = split_comma.map(sentence => {
    var line_three = sentence.map(comma => {
        var line_two = []
        comma.split(' ').map(line => {
            var line_one = []
            line.split('.').map(x => {
                if (x != '') {
                    if (censor_word.includes(x)) {
                        line_one.push('*'.repeat(x.length))
                    } else {
                        line_one.push(x)
                    }
                }
            })
            line_two.push(line_one)
        })
        return line_two.join(' ');
    })
    return line_three.join(',')
})
console.log(result.join('. \n') + '.');
