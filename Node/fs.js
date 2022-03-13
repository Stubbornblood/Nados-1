let  fs = require("fs"); //fileSystem
let path = require("path");
//console.log(fs);

//create
// let filepath = path.join(__dirname,"testing.text");
// console.log(filepath);
// fs.writeFileSync(filepath,"Hello i am a File");
// fs.writeFileSync(filepath,"Again Witting");
//create file if not exite
//if file exit then it clear it and update it

//read
// let containt = fs.readFileSync(filepath,'utf-8');
// console.log(containt);

//update
// fs.appendFileSync(filepath,"I just got Updated");
// console.log(fs.readFileSync(filepath,'utf-8'));

//Delete

// fs.unlinkSync(filepath);

    // fs.mkdirSync("File");


// fs.rmdirSync("File");
//if any file is present in dir u can delete dir by this way
// fs.rm(File, { recursive: true, force: true })

let SourcePath = path.join(__dirname,"File.txt");
let DestinationPath = path.join(__dirname,"module","File.txt");
console.log(DestinationPath);

fs.copyFileSync(SourcePath,DestinationPath);
