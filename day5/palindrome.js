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
    let stringArray = "MADAM";
    PalindromeFunction(stringArray);
    
    //IIFE function
    (function(stringArr){
        PalindromeFunction(stringArr);
    })(stringArray);
    
});

    function PalindromeFunction(stringArray){
        var regex = /[^A-Za-z0-9]/g;
        var flag = true;
        stringArray = stringArray.toLowerCase().replace(regex, '');
        var stringLength = stringArray.length;
        for(var i = 0; i < stringLength /2; i++){
            if(stringArray[i] !== stringArray[stringLength - 1 - i]){
                flag = false;
            }
        }
        isFlag(flag);
    }
    
    function isFlag(flag){
        if(flag){
            console.log('given string is palindrome')
        }else{
            console.log('given string is not palindrome')
        }
    }