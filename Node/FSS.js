let  fs = require("fs"); //fileSystem
let path = require("path");

let SourcePath = path.join(__dirname,"fl.txt");
let DestinationPath = path.join(__dirname,"module","fl.txt");
console.log(DestinationPath);

fs.copyFileSync(SourcePath,DestinationPath);