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
    let stringArray = ["A", "B", "C", "D", "A", "C"];
    removeDuplicateArray(stringArray);
    
    (function(stringLiterals){
        let uniqueChars = [...new Set(stringLiterals)];
        console.log(uniqueChars);
    })(stringArray);
    
});

    function removeDuplicateArray(stringArray){
        let uniqueChars = [];
        stringArray.forEach(stringElement => {
            if(!uniqueChars.includes(stringElement)){
                uniqueChars.push(stringElement);
            }
        });
        console.log(uniqueChars);
    }

    