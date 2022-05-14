// Include process module
const process = require('process');
  
// Printing process.argv property value
var args = process.argv;
const a =null;
//console.log("number of arguments is "+args.length);
let arr=[]
args.forEach((val, index) => {
    arr=[...arr,`${val}`]
    
});
let sum=null;
for (let i=0; i<arr.length;i++) {
  sum=parseInt(arr[2])+ parseInt(arr[3]) 
}
console.log(sum)