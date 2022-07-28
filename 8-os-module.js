const os = require('os')

console.log(os.userInfo())

console.log(`System uptime is ${os.uptime()} seconds`)

const info = {
    type: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(info)