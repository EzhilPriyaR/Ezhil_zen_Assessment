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
    let primeNum = 5;
    PrimeNumberFunction(primeNum);
    
    (function(prime){
        PrimeNumberFunction(primeNum);
    })(primeNum);
    
    
});

    function PrimeNumberFunction(primeNum){
        if(primeNum % 2 === 0 || check(primeNum)){
            console.log("Given Number is not a primeNumber");
        }else{
            console.log("Given number is prime Number");
        }
    }
    
    function check(primeNum){
        for(let i = 3; i <= Math.sqrt(primeNum); i+=2){
            if (primeNum % i === 0) {
               return true ;
            }
            return false;
        }
    }