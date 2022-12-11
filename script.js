const mainScreen = document.querySelector(".main-screen");
const secScreen = document.querySelector(".secondary-screen");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
let firstOperand, secondOperand;
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
        firstOperand = Number(mainScreen.textContent);
        opertaionType = ope.dataset.value;
        mainScreen.textContent = "";
        secScreen.textContent = firstOperand + ope.textContent;;
       /*  if(ope.dataset.value === "addi" ){
            firstOperand = Number(mainScreen.textContent) + Number(secScreen.textContent)
            secScreen.textContent = firstOperand;
            mainScreen.textContent = "";

        } else if (ope.dataset.value === "sub" ){
            firstOperand = Number(mainScreen.textContent)  Number(secScreen.textContent)
            secScreen.textContent = firstOperand;
            mainScreen.textContent = "";
        } */
        
    })
})

equal.addEventListener("click", () => {
    secondOperand = Number(mainScreen.textContent);
    let result = caluculate(firstOperand, secondOperand, opertaionType);
    secScreen.textContent += mainScreen.textContent;
    mainScreen.textContent = result;
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