const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

if (a < b) {
    console.log("<");
} else if (a > b) {
    console.log(">");
} else {
    console.log("==");
}
