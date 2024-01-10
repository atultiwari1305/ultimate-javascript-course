const prompt = require("prompt-sync")();
let timer = prompt("Enter the time")
let timerunner = (timer) => {
    setTimeout(()=>console.log("iam"), timer
)};
timerunner(timer)
