const display = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

const specialChars =["%", "*", "/", "+", "-"];

let output = "";

//calculator function upon click
const calculate = (value) => {
    if(value === "=" && output !== ""){
        //if output has '%' replace with '/100' before evaluation
        output = eval(output.replace("%", "/100")); 
    }else if (value === 'Ac'){
        output = "";
    }else if (value === "Del"){
        output =output.toString().slice(0, -1);  
    }else {
     //if output is empty and button is special character then return
     if (output === "" && specialChars.includes(value)) return;
     output += value;
    }
    display.value = output;


};

//Add event listener to buttons,call calculate on click 
 buttons.forEach((button) =>{
    //buttons click listener calls calculate() with dataset value as argument
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
 });