console.time()
console.log("first")
setTimeout(()=>{
    console.log("second")
},0)


console.log("last")
console.timeEnd()
console.table({
    name: "AmirMahdi",
    last_name: "Richards",
    age: 37.9,
    isPerfectlyHandSome: true,
    describeLastParameter: "just kidd'n :)))"
})