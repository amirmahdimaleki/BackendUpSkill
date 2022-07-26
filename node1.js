// console.time()
// console.log("first")
// setTimeout(()=>{
//     console.log("second")
// },0)


// console.log("last")
// console.timeEnd()
// console.table({
//     name: "AmirMahdi",
//     last_name: "Richards",
//     age: 37.9,
//     isPerfectlyHandSome: true,
//     describeLastParameter: "just kidd'n :)))"
// })

// * ------------------------------------------------------------------
//! Async

// const {readFile, writeFile} = require("fs").promises
// // const util = require('util')

// // const readFilePromise = util.promisify(readFile)
// // const writeFilePromise = util.promisify(writeFile)

// const fn = async () => {
//     try {
//         const file = await readFile('./README.md', 'utf-8')
//         console.log(file)
        
//     } catch (err) {
//         console.log(err)
//     }
// }

// fn()

//  * -----------------------------------------------------------------
// ! event and emitter

// // in event emitters order matters : 1-on 2-emit
// const EventEmitter = require('events')

// const myEmitter = new EventEmitter()

//  myEmitter.on('Birth', (num, name)=>{
//     console.table({
//         hello:`${name} with ${num} years old`
//     })
//  })

// myEmitter.emit('Birth', 12, "juju")

// * -------------------------------------------------------------------
// ! stream

// const {createReadStream} = require('fs')
// //                                          -> options obj
// const stream = createReadStream('./README.md', {highWaterMark:1000, encoding:'utf-8'})

// stream.on('data', (res)=>{ 
//     console.warn(res)
// })

// stream.on('error', (result)=>{
//     console.log(result)
// })

// * ------------------------------------------------------------------
// ! stream real usage

const fs = require('fs')
const http = require('http')

http.createServer((req, res)=>{
    const fileStream = fs.createReadStream('./README.md', 'utf-8')
    fileStream.on('open', ()=>{

        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{

        res.end(err)
    })
})
.listen(5000)