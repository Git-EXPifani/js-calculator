const displayCalc = document.querySelector("#display");
const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");
const btnThree = document.querySelector("#three");
const btnFour = document.querySelector("#four");
const btnFive = document.querySelector("#five");
const btnSix = document.querySelector("#six");
const btnSeven = document.querySelector("#seven");
const btnEight = document.querySelector("#eight");
const btnNine = document.querySelector("#nine");
const btnZero = document.querySelector("#zero");
const btnEQ = document.querySelector("#eq");
const btnClear = document.querySelector("#clear");

const plusSign = document.querySelector("#plus");
const minusSign = document.querySelector("#minus");
const multiplySign = document.querySelector("#multiply");
const divideSign = document.querySelector("#divide");

btnEQ.addEventListener("click", () => 
    operate()
);

plusSign.addEventListener("click", () => {
    displayCalc.value += "+";
});

minusSign.addEventListener("click", () => {
    displayCalc.value += "-";
});

multiplySign.addEventListener("click", () => {
    displayCalc.value += "*";
});

divideSign.addEventListener("click", () => {
    displayCalc.value += "/";
});

btnClear.addEventListener("click",()=>{
    displayCalc.value = "";

});

btnOne.addEventListener("click", () => {
    displayCalc.value += "1";
});

btnTwo.addEventListener("click", () => {
    displayCalc.value += "2";
});

btnThree.addEventListener("click", () => {
    displayCalc.value += "3";
});

btnFour.addEventListener("click", () => {
    displayCalc.value += "4";
});

btnFive.addEventListener("click", () => {
    displayCalc.value += "5";
});

btnSix.addEventListener("click", () => {
    displayCalc.value += "6";
});

btnSeven.addEventListener("click", () => {
    displayCalc.value += "7";
});

btnEight.addEventListener("click", () => {
    displayCalc.value += "8";
});

btnNine.addEventListener("click", () => {
    displayCalc.value += "9";
});

btnZero.addEventListener("click", () => {
    displayCalc.value += "0";
});
function add(inp1,inp2){
    return Number(inp1) + Number(inp2);
}

function subtract(inp1,inp2){
    return inp1 - inp2;
}

function multiply(inp1,inp2){
    return inp1 * inp2;
}

function divide(inp1,inp2){
    return inp1 / inp2;
}

function operate(){

    if(displayCalc.value == ''){
        alert("Kindly enter a number before proceeding.");
    }

    let displayString = displayCalc.value;
    // console.log(displayString);
    let tokens = displayString.split(/([+\-*/])/); 
    console.log(tokens);

    let index;
    let valone;
    let valtwo;
    

    if(tokens.includes("/")){
        index = tokens.indexOf("/"); 
        valone = tokens[index - 1];
        valtwo = tokens[index + 1];


        let result = divide(valone,valtwo);
        result = result.toFixed(3);
        if(result=='Infinity'){
            alert("You tried dividing by zero :/ (press CL)")
        } 

        tokens.splice(index-1,3,result.toString());
        displayCalc.value = tokens.join("");
    } else if(tokens.includes("*")){
        
        index = tokens.indexOf("*"); 
        valone = tokens[index - 1];
        valtwo = tokens[index + 1];


        let result = multiply(valone,valtwo);
        result = result.toFixed(3);

        tokens.splice(index-1,3,result.toString());
        displayCalc.value = tokens.join("");
    } else if(tokens.includes("+")){
        
        index = tokens.indexOf("+"); 
        valone = tokens[index - 1];
        valtwo = tokens[index + 1];


        let result = add(valone,valtwo);
        result = result.toFixed(3);

        tokens.splice(index-1,3,result.toString());
        displayCalc.value = tokens.join("");
    } else if(tokens.includes("-")){

        
        index = tokens.indexOf("-"); 
        valone = tokens[index - 1];
        valtwo = tokens[index + 1];


        let result = subtract(valone,valtwo);
        result = result.toFixed(3);

        tokens.splice(index-1,3,result.toString());
        displayCalc.value = tokens.join("");
    }

    if(tokens.length == 1 ){
        alert(`[result:  ${displayCalc.value}  ]
        The calculation is now reset as it's the final result.`);
        displayCalc.value = '';
    }
}