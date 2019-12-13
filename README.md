# Kevin String 
![npm](https://img.shields.io/npm/v/@ericanaglik/kevin-string?style=for-the-badge) 
![GitHub repo size](https://img.shields.io/github/repo-size/ericanaglik/kevin-string?style=for-the-badge)
[![Build Status](https://travis-ci.com/ericanaglik/kevin-string.svg?branch=master)](https://travis-ci.com/ericanaglik/kevin-string)
[![Coverage Status](https://coveralls.io/repos/github/ericanaglik/kevin-string/badge.svg?branch=master)](https://coveralls.io/github/ericanaglik/kevin-string?branch=master)

### Getting Started
Run the following command in your project folder: <br/>
```
npm install @ericanaglik/kevin-string --save
``` 
Then add this to your index.js file <br/>
```
require('@ericanaglik/src/kevin-string')
```

## Capitalization 
**capitalize()** </br> 
This method capitalizes the first letter of an entire string </br> 
`'hello world!'.capitalize()` &#8594; "Hello world!"

**allCaps()** </br> 
This method capitalizes ALL letters in a string </br> 
`'hello world!'.allCaps()` &#8594; "HELLO WORLD!"

**capitalizeWords()** </br> 
This method capitalizes the first letter of every word in a string </br> 
`'hello world!'.capitalizeWords()` &#8594; "Hello World!"

## Special Casing 
**kabobCase()** </br> 
This method transforms a string into lower case and separates words with hyphens </br> 
`'Hello World'.kabobCase()` &#8594; "hello-world"

**snakeCase()** </br> 
This method transforms a string into lower case and separates words with an underscore </br> 
`'Hello World'.snakeCase()` &#8594; "hello_world"

**camelCase()** </br> 
This method removes spaces from a string and capitalizes the first letter of each word following the first word </br> 
`'Hello World'.camelCase()` &#8594; "helloWorld"

## Spacing 

**removeExtraSpaces()** </br> 
This method removes excess spaces around words (leaves single space) </br> 
`'   Hello World  '.removeAllSpaces()` &#8594; "Hello World"