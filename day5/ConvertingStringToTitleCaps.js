// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let stringArray = "hi guvi!! by ezhil";
    AnonymousFunction(stringArray);
    
    //IIFE function
    (function(string){
        stringArray = stringArray.toLowerCase().split(' ');
        for(var i = 0; i < stringArray.length; i++){
            stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
        }
        console.log(stringArray.join(' '));
    })(stringArray);
});

    function AnonymousFunction(stringArray){
        stringArray = stringArray.toLowerCase().split(' ');
        for(var i = 0; i < stringArray.length; i++){
            stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
        }
        console.log(stringArray.join(' '));
    }