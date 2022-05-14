const fs=require("fs")
const process = require('process');
var args = process.argv;
let arr=[]
args.forEach((val) => {
    arr=[...arr,`${val}`] 
});
let H=fs.readFile(arr[2],(err,data)=>{
if (err) { throw err }
else
{
let s=null;
for (let i=0;i<data.length;i++) 
    {
        if (data[i]===10) 
        {
            s=s+1;
        }
    }
console.log(s)
}})