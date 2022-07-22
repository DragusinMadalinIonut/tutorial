const { readFile, writeFile } = require('fs')
//we get buffer if we don't add utf8
//functionality inside callback

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err) {
            console.log(err)
            return
    }
    const second = result
    writeFile(
        '/content/result-async.txt',
        `Here is the result:  ${first},${second}`,(err,result) =>{
            (err,result)=>{
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})
