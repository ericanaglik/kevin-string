String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
 }
 
 const result = "hello".capitalize() // returns "Hello"
console.log(result)

String.prototype.allCaps = function() {
    return this.toUpperCase()
}

const result2 = "hello".allCaps() // returns "HELLO"
console.log(result2)

