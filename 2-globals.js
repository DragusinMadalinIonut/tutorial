//window object
//no window in node js
//there are globals in node js
//quite a lot of them
//__dirname - path to current directory
//__filename - file name
//require - function to use modules(CommonJS)
//module - info about current module(file)
//process - infro about env where the program is being excecuted

console.log(__dirname)
setInterval(()=>{
    console.log('hello world')
},1000)