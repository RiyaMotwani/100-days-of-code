const path= require('path');
const fs= require('fs');
const os= require('os');

let pathObj=path.parse(__filename);
console.log(pathObj);

console.log("Total memory in device = ",os.totalmem());
console.log("Free memory in device = ",os.freemem());

const directoryPath = 'C:\Users\lenovo\NodeJS';
fsObj=fs.readdir(directoryPath, (err,files)=>{
    if (err) console.log("Error");
    else return files;
 })
console.log("Content in the directory are : ",fsObj);