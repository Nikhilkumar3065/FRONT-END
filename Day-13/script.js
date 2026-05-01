let input = document.getElementById("input");
console.log(input);
const btn1 = () => {
    input.value += "1";
}
const btn2 = () => {
    input.value += "2";
}
const btn3 = () => {
    input.value += "3";
}
const btn4 = () => {
    input.value += "4";
}
const btn5 = () => {
    input.value += "5";
}
const btn6 = () => {
    input.value += "6";
}
const btn7 = () => {
    input.value += "7";
}
const btn8 = () => {
    input.value += "8";
}
const btn9 = () => {
    input.value += "9";
}
const btn0 = () => {
    input.value += "0";
}
const btnPlus = () => {
    input.value += "+";
}
const btnMinus = () => {
    input.value += "-";
}
const btnMul = () => {
    input.value += "*";
}
const btnDiv = () => {
    input.value += "/";
}
const btnEqual = () => {
    input.value = eval(input.value);
}
const btnClear = () => {
    input.value = "";
}
const btnDot = () => {
    input.value += ".";
}
const btnSqrt = () => {
    input.value = Math.sqrt(input.value);
}
const btnCe = () => {
    input.value = input.value.slice(0, -1);
}
const btnPercent = () => {
    input.value = input.value / 100;
}   
