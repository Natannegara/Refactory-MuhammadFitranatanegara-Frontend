const secret_text = "23dn3ir30fd2eddd"

// creating censor string function
function masking(text) {
    // each text/string should be splitted and reversed, because we need 3 last char not to be censored
    const new_text = text.split('').reverse();
    for (var i = 3; i < new_text.length; i++) {
        // changing the other char by asterisk except 3 last char
        new_text[i] = '*'
    }
    // joining the element and reversing back
    console.log(new_text.reverse().join(''));
}
masking(secret_text)