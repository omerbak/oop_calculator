class Calculator {
  constructor(currentOperandHtml, prevOperandHtml) {
    this.currentOperandHtml = currentOperandHtml;
    this.prevOperandHtml = prevOperandHtml;
    this.currentOperand = "";
    this.prevOperand = "";
    this.operation = null;
    /*  isCalculated property is to prevent the action of apending to a reslut 
    that is claculated and not a number entered by the user */
    this.isCalculated = false;
  }

  appendNumber(num) {
    if (num == "." && this.currentOperand.includes(".")) return;
    if (this.isCalculated) {
      this.currentOperand = "";
      this.isCalculated = false;
    }
    this.currentOperand += num;
    this.updateScreen();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.prevOperand != "") {
      this.calculate();
    }
    this.operation = operation;
    this.prevOperand = this.currentOperand;
    this.currentOperand = "";
    this.updateScreen();
    //console.log(this.operation);
  }

  calculate() {
    let calculation;
    let prev = parseFloat(this.prevOperand);
    let curr = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operation) {
      case "+":
        calculation = prev + curr;
        break;
      case "-":
        calculation = prev - curr;
        break;
      case "*":
        calculation = prev * curr;
        break;
      case "/":
        calculation = prev / curr;
        break;
      case "%":
        calculation = prev % curr;
        break;
      default:
        return;
    }

    this.currentOperand = (Math.round(calculation * 100) / 100).toString();
    this.operation = null;
    this.prevOperand = "";
    this.isCalculated = true;
    this.updateScreen();
  }

  del() {
    if (this.currentOperand.length <= 0) return;
    this.currentOperand = this.currentOperand.slice(0, -1);
    this.updateScreen();
  }

  reset() {
    this.currentOperand = "";
    this.prevOperand = "";
    this.operation = null;
    this.updateScreen();
  }

  updateScreen() {
    this.currentOperandHtml.textContent = this.currentOperand;
    if (this.operation) {
      this.prevOperandHtml.textContent = `${this.prevOperand} ${this.operation}`;
    } else {
      this.prevOperandHtml.textContent = `${this.prevOperand}`;
    }
  }
}

const currentOperandHtml = document.querySelector(".main-screen");
const prevOperandHtml = document.querySelector(".secondary-screen");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");

// initiate our calculator
let calc = new Calculator(currentOperandHtml, prevOperandHtml);

numbers.forEach((number) =>
  number.addEventListener("click", () => {
    calc.appendNumber(number.innerHTML);
  })
);

operations.forEach((ope) =>
  ope.addEventListener("click", () => {
    calc.chooseOperation(ope.textContent);
  })
);

clear.addEventListener("click", () => {
  calc.reset();
});

del.addEventListener("click", () => {
  calc.del();
});

equal.addEventListener("click", () => {
  calc.calculate();
});
