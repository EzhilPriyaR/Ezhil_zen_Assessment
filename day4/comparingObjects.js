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
    let employeeOne = {name: "Ezhil", EmpId:905, age:27, email:"ezhil.priya23@gmail.com"};
    let employeeTwo = {age:27, email: "soniyashivani95@gmail.com", name:"Soniya", EmpId:1036};
    let flag = true;
    for(let detail in employeeOne){
        if(employeeOne[detail] !== employeeTwo[detail]){
            flag = false;
            break;
        }
    }
    if(flag){
        console.log("Array is equal");
    }else{
        console.log("Array is not equal");
    }

   
});
