// Write a code to truncate a string to a certain number of words

function truncateWords(word) {

    let wordLimit = 3

    return word.split(' ').slice(0, wordLimit).join(' ')
}
console.log(truncateWords('I am amazing yes you'))