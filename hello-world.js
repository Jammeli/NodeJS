const fs=require("fs")
let H=fs.readFile("HelloWorld.txt","UTF-8", (err,data)=>{ 
    if (err) {throw (err)} else console.log(data)})