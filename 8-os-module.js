const os = require('os')
//we just use os becauseit is built in
//before = we can repolace os with diferent structure\
//info about current user
const user = os.userInfo()
console.log(user);
//method returnsthe system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)