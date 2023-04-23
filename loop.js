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
  
  let numberArray = [10, 20, 30, 40, 50, 60, 70];
  
  //for-loop
  // sum of an Array
  let sum = 0;
  for(let i = 0; i < numberArray.length; i++){
      sum = sum + numberArray[i];
  }
  console.log('sum of an array:' + sum);
  
  //for-in loop
   let person = ["Hi", "Guvi", "by", "EzhilPriya.R"];
   let text = '';
   for (let x in person) {
      text += person[x] + " ";
   }
   console.log(text);
   
   //for-of loop
   const cars = ['BMW', 'Maruthi', 'Tata', 'Servlet'];
   for(let y of cars){
       console.log(y)
   }
   
   //for-each
   let product = 0;
   numberArray.forEach(elements => {
      products =  elements * 10;
      console.log(products);
   });
   
});