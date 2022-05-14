const fs=require("fs")
const process = require('process');
var args = process.argv;
let arr=[]
args.forEach((val, index) => {
    arr=[...arr,`${val}`] 
});
let H=fs.readFileSync(arr[1]);
let s=null;
for (let i=0;i<H.length;i++) 
    {

        if (H[i]===10) 
        {
            s=s+1;
        }
    }
console.log(s+1)