String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
 }
 
 const result = "hello".capitalize() // returns "Hello"
console.log(result)
