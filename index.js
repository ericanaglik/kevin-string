String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
 }
 
 const result = "hello".capitalize() // returns "Hello"
console.log(result)

String.prototype.allCaps = function() {
    return this.toUpperCase()
}

const result2 = "foo bar".allCaps() // returns "FOO BAR"
console.log(result2)

String.prototype.capitalizeWords = function() {
    return this.split(' ').map((word) => {
        return word.capitalize()
    }).join(' ')
}

const result3 = "do all the things".capitalizeWords() // returns "Do All The Things"
console.log(result3)

String.prototype.removeExtraSpaces = function() {
    return this.trim()
}

const result4 = "  Hello World!  ".removeExtraSpaces() // returns "Hello World!"
console.log(result4)

String.prototype.kabobCase = function() {
    return this.removeExtraSpaces().toLowerCase().split(' ').join('-')
}

const result5 = "  Hello World  ".kabobCase() // returns "hello-world"
console.log(result5)

