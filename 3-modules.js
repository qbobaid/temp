//CommonJS - every file is a module in node (by default)
// MODULES - encapsulated code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternate-flavor')
require('./7-mind-granade')

console.log(data)

sayHi('Helan')
sayHi(names.peter)
sayHi(names.john)