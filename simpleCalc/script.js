const display = document.getElementById('display');

function dinamicFontSizeChange() {
  const numberSize = document.getElementById('display');
  const keypad = document.getElementById('keypad');
  keypad.addEventListener('click', function(event){
    if (numberSize.innerText.length > 14) {
      numberSize.style.fontSize = '30px';
    } else if (numberSize.innerText.length > 11) {
      numberSize.style.fontSize = '35px';
    } else if (numberSize.innerText.length > 8) {
      numberSize.style.fontSize = '45px';
    } else if (numberSize.innerText.length > 5) {
      numberSize.style.fontSize = '55px';
    }
  });  
}
dinamicFontSizeChange();

function showOnDisplay() {
  const keypad = document.querySelector(".keypad");
  keypad.addEventListener('click', function(event) {
    const displaySize = display.innerText.length;
    if (displaySize === 18 && event.target.className === 'calculator_number') {
      alert('Max number size: 18 characters');
    } else if (event.target.className === 'calculator_number') {      
      const numberCliked = event.target.innerText;
      if (display.innerText === '0') {
        display.innerText = numberCliked;
      } else {
        let displayInfo = display.innerText;
        display.innerText = displayInfo + event.target.innerText;
      }
    }
  });
}
showOnDisplay();

function insertDot() {
  const dotBtn = document.getElementById('key-dot');
  dotBtn.addEventListener('click', function(){
    const dot = display.innerText.indexOf('.');
    if (dot === -1) {
      display.innerText += dotBtn.innerText;
    }
  });
}
insertDot();

function clearDisplay() {
  const clearBtn = document.getElementById('key-clear');
  clearBtn.addEventListener('click', function() {
    display.innerText = '0';
    display.style.fontSize = '80px';
  });
}
clearDisplay();

/* Operators goes down here */

let number1 = '0';
let number2 = '0';
let add = 'setOff';
let sub = 'setOff';
let div = 'setOff';
let mult = 'setOff';
let result;

function calculate() {
  const calculateBtn = document.getElementById('calculate');
  calculateBtn.addEventListener('click', function(){
    number2 = display.innerText;
    let a = parseFloat(number1);
    let b = parseFloat(number2);
    if (add === 'setOn') {
      display.innerText = (a + b).toString();
    } else if (sub === 'setOn') {
      display.innerText = (a - b).toString();      
    } else if (div === 'setOn') {
      display.innerText = (a / b).toString();      
    } else if (mult === 'setOn') {
      display.innerText = (a * b).toString();      
    }
    number1 = '0';
    number2 = '0';
    add = 'setOff';
    sub = 'setOff';
    div = 'setOff';
    mult = 'setOff';
  });
}
calculate();

function sum() {
  const additionBtn = document.getElementById('key-addition');
  additionBtn.addEventListener('click', function(){
     if (number1 = '0') {
      number1 = display.innerText;
      add = 'setOn';
     }
    display.innerText = '0';
  });
}
sum();

function subtraction() {
  const additionBtn = document.getElementById('key-subtraction');
  additionBtn.addEventListener('click', function(){
     if (number1 = '0') {
       number1 = display.innerText;
       sub = 'setOn';
     }
    display.innerText = '0';
  });
}
subtraction();

function division() {
  const additionBtn = document.getElementById('key-divide');
  additionBtn.addEventListener('click', function(){
     if (number1 = '0') {
       number1 = display.innerText;
       div = 'setOn';
     }
    display.innerText = '0';
  });
}
division();

function multiplication() {
  const additionBtn = document.getElementById('key-multiple');
  additionBtn.addEventListener('click', function(){
     if (number1 = '0') {
       number1 = display.innerText;
       mult = 'setOn';
     }
    display.innerText = '0';
  });
}
multiplication();

function positiveNegative() {
  const posNegBtn = document.getElementById('key-changeSign');
  posNegBtn.addEventListener('click', function(){
    let valueToChange = parseFloat(display.innerText);
    display.innerText = (valueToChange * -1).toString();    
  });
}
positiveNegative();
