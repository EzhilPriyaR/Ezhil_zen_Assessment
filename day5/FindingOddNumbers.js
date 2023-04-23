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
    let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    AnonymousFunction(numberArray);
    
    //ArrowFunction
    var resultArray =  [];
    numberArray.forEach(numbers => {
        if(numbers % 2 != 0){
            resultArray.push(numbers);
        }
    });
    console.log('Finding Odd Numbers by Arrow function: ' + resultArray);
    
    //IIFE function
    (function(number){
        var resultArray =  [];
        for(let num of number){
            if(num % 2 != 0){
                resultArray.push(num);
            }
        }
        console.log('Finding Odd Numbers by IIFE function: ' + resultArray);
        
    })(numberArray);
    
    
});

    function AnonymousFunction(numberArray){
        var resultArray =  [];
        for(let number of numberArray){
            if(number % 2 != 0){
                resultArray.push(number);
            }
        }
        console.log('Finding Odd Numbers by Anonymous function: ' + resultArray);
    }