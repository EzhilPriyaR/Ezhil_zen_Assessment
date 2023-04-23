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
    let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
    AnonymousFunction(numberArray);
    
    //ArrowFunction
    var result =  0;
    numberArray.forEach(numbers => {
        result = result + numbers;
    });
    console.log('Finding Odd Numbers by Arrow function: ' + result);
    
    //IIFE function
    (function(number){
        var result =  0;
        for(let num of number){
            result = result + num;
        }
        console.log('sum of an array by IIFE function: ' + result);
        
    })(numberArray);
    
    
});

    function AnonymousFunction(numberArray){
        var result = 0;
        for(let number of numberArray){
            result = result + number;
        }
        console.log('sum of an array by Anonymous function: ' + result);
    }