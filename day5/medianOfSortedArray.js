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
    var arrayOne = [1, 12, 15, 26, 38];
    var arrayTwo = [2, 13, 17, 30, 45];
    let arrayLength = arrayOne.length;
    if(arrayLength == arrayTwo.length){
        (function(array1, array2, arrayLen){
            medianFunction(array1, array2, arrayLen);
        })(arrayOne, arrayTwo, arrayLength);
    }else{
        console.log("function dosen't works for unequal arrays")
    }
    
     
    
    
});

    function medianFunction(arrayOne, arrayTwo, arrayLength){
        var initialValue = 0, finalValue = 0; result = 0;
        var count;
        var medianOne = -1, medianTwo = -1;
        for (count = 0; count <= arrayLength; count++){
            if (initialValue == arrayLength){
                medianOne = medianTwo;
                medianTwo = arrayTwo[0];
                break;
            }else if (finalValue == arrayLength){
                medianOne = medianTwo;
                medianTwo = arrayOne[0];
                break;
            }
            if (arrayOne[initialValue] <= arrayTwo[finalValue]){
                medianOne = medianTwo;
                medianTwo = arrayOne[initialValue];
                initialValue++;
            }else{
                medianOne = medianTwo;
                medianTwo = arrayTwo[finalValue];
                finalValue++;
                
            }
            result =  (medianOne + medianTwo)/2;
        }
        console.log(result);
    }
    