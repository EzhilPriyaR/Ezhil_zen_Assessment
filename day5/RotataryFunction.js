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
    let numberArray = [1, 2, 3, 4, 5, 6];
    let numberOfRotate = 3;
    
    (function(numbers, rotate){
        rotataryFunction(numbers, rotate);
    })(numberArray, numberOfRotate);
   
    
});


function rotataryFunction(numberArray, numberOfRotate) {
    let deletedArray = numberArray.splice(numberArray.length-numberOfRotate);
    for (let i=0; i < deletedArray.length; i++){
        numberArray.splice(i,0,deletedArray[i]);
    }
    
    console.log(numberArray);
}

    
