let numbers = document.querySelectorAll('.calc-number');
let operators = document.querySelectorAll('.calc-operator');

let inputArr = []; // current equation items
const inputNum = 'number'; // input identifier assigned on number click
const inputOp = 'operator'; // input identifier assigned on operator click

let equationEl = document.querySelector('.calc-equation');
let viewerEl = document.querySelector('.calc-viewer');
let equalEl = document.querySelector('.calc-equal');
let clearEl = document.querySelector('.calc-clear');
let resetEl = document.querySelector('.calc-reset');

function checkInputArr() {
  if( inputArr.length > 0 ) {
    var last = inputArr.pop();
    if ( last !== inputOp ) {
			return true;
    } else {
    	return false;
    }
  }
}

// Numbers
numbers.forEach(function(v, i){
  v.addEventListener('click', function(e){
    e.preventDefault();
    var thisNumber = this.innerHTML;
    equationEl.innerHTML += thisNumber;
    viewerEl.innerHTML = thisNumber;
    inputArr.push(inputNum);
  });
});

// Operators
operators.forEach(function(v,i){
  v.addEventListener('click', function(e){
    e.preventDefault();
    if(checkInputArr()) {
      var thisOperator = this.innerHTML;
      equationEl.innerHTML += thisOperator;  
      inputArr.push(inputOp);
    }
  });
});

// Calculate 
equalEl.addEventListener('click', function(e){
	e.preventDefault();
  if (checkInputArr()) {
    viewerEl.innerHTML = eval(equationEl.innerHTML);
  }
});

// Clear & Reset
clearEl.addEventListener('click', function(e){
	e.preventDefault();
	inputArr = [];
  equationEl.innerHTML = '';
	viewerEl.innerHTML = '0';
});