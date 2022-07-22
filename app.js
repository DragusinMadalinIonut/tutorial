//npm - global command, comes qwith node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g<packageNa,e>
//sudo npm install -g<packageNa,e>(NAC)

//package.jsomn - manifest file(stores import info about project.package)`
//manual approach(create package.json in the root, cretae proprieties etc)
//npm init(step by step, press eneter to skip)
//npm init -y(everything default)
//push vs call
//size to big ,. Push without load module.

const _ = require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems =_flattenDeep(items)
console.log(newItems)