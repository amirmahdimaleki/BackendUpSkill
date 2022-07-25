console.time()
console.log("first")
setTimeout(()=>{
    console.log("second")
},0)
console.log("last")
console.timeEnd()