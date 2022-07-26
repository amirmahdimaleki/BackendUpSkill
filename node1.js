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


const EventEmitter = require('events')

const myEmitter = new EventEmitter()

 myEmitter.on('Birth', ()=>{
    console.table({
        hello:"world"
    })
 })

myEmitter.emit('Birth')