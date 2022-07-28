// npm - global command, comes with node
// npm --version (to check node package manager version)

// local dependency - use only for this project
// npm i <package name>

// global dependency - use it in any project
// npm install -g <package name> (g stands for global)

// package.json - manifest file (store important info about project)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)