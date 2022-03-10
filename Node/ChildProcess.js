let cp = require('child_process');
// console.log(cp);

// cp.execSync("calc");

let content = cp.execSync("node new.js");
console.log("Output : "+content);