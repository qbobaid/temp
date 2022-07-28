const path = require('path')

//PATH SEPERATOR
const sep = path.sep
console.log(`seperator for this system is ${sep}`);

//JOINED FILE PATH
const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath)

//BASE OF FULL PATH
const base = path.basename(filePath)
console.log(base)

//ABSOLUTE PATH
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)
