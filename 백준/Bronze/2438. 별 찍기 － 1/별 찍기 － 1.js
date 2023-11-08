const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString();
let a = parseInt(input);

for (let i = 1; i <= a; i++ ) {
    console.log("*".repeat(i));
}