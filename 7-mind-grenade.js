const mum1 =5;
const num2 =10;

function addValues(){
    console.log(`  the sum is : ${num1 + num2} `)
}

addValues()
// ./ dot represents level
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require(['./6-alternative-flavor'])
//console.log(names)
require('./7-mind-grenade')
console.log(data)

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)