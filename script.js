const mainScreen = document.querySelector(".main-screen");
const secScreen = document.querySelector(".secondary-screen");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
let firstOperand = null, secondOperand = null;
let opertaionType ;
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");

numbers.forEach(num => {
    num.addEventListener("click", (e) => {
        mainScreen.textContent += num.dataset.value;

    })
})

operations.forEach(ope => {
    ope.addEventListener("click", () => {
       //if(mainScreen.textContent !== ""){
            if(firstOperand === null && secondOperand === null){
                firstOperand = Number(mainScreen.textContent);
                opertaionType = ope.dataset.value;
                mainScreen.textContent = "";
                secScreen.textContent = firstOperand + ope.textContent;
                console.log(firstOperand, secondOperand);

            } else if(firstOperand !== null && secondOperand === null){
                secondOperand = Number(mainScreen.textContent);
                firstOperand = caluculate(firstOperand, secondOperand, opertaionType);
                secondOperand = null;
                secScreen.textContent = firstOperand + ope.textContent;
                opertaionType = ope.dataset.value;
                mainScreen.textContent = "";

            } else if(firstOperand !== null && secondOperand !== null){
                firstOperand = Number(mainScreen.textContent);
                secondOperand = null;
                mainScreen.textContent = "";
                opertaionType = ope.dataset.value;
                secScreen.textContent = firstOperand + ope.textContent;
            }
       // }
    })
})

equal.addEventListener("click", () => {
    
    if(secondOperand === null){
        secondOperand = Number(mainScreen.textContent);
        firstOperand = caluculate(firstOperand, secondOperand, opertaionType);
        secScreen.textContent += mainScreen.textContent;
        mainScreen.textContent = firstOperand;
    }
})

function caluculate(first, second, ope){
    console.log(first, second,ope);
    if(ope === "addi"){
        return Number(first) + Number(second);

    } else if(ope === "sub"){
        return Number(first) - Number(second);

    } else if(ope === "mult"){
        return Number(first) * Number(second);

    } else if(ope === "divi"){
        return Number(first) / Number(second);

    } else if (ope === "mod") {
        return Number(first) % Number(second);
    }
}


clear.addEventListener("click", () => {
    firstOperand = null;
    secondOperand = null;
    mainScreen.textContent ="";
    secScreen.textContent = "";
})

del.addEventListener("click", () => {
    let text = mainScreen.textContent;
    if(text.length > 1){
        mainScreen.textContent = text.slice(0, text.length - 1);

    } else if( text.length === 1){
        mainScreen.textContent = "";
    }
})