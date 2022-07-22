const {readFile, writeFile } = require('fs')

console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err)
        return
}
})

const first= result
writeFile(
    './content/second.txt',
    `Here is the result :  ${first},${second}`,
    (err,result) =>{
        if(err){
            console.log(err)
            returtn
        }
        const second= result
        writeFile(
            './content/second.txt',
            `Here is the result :  ${first},${second}`,
            (err,result) =>{
                if(err){
                    console.log(err)
                    returtn
                }
                console.log(result)
            }
)}
   
)