//"C:\Users\stubb\Desktop\FJP-6\Node\Path.js"

let path = require("path");
//console.log(path);

// let extensionName = path.extname("C:\Users\stubb\Desktop\FJP-6\Node\Path.js");
// console.log(extensionName);

//base name

//  let baseName = path.basename(__filename);
//   console.log(baseName);

// console.log(__dirname);
// console.log(__filename);

let dirPath = __dirname;
console.log(dirPath);
let newFilePath = path.join(dirPath,"text.js");
console.log(newFilePath);