'use strict';

var numbers = document.querySelectorAll('.calc-number');
var operators = document.querySelectorAll('.calc-operator');

var inputArr = []; // current equation items
var inputNum = 'number'; // input identifier assigned on number click
var inputOp = 'operator'; // input identifier assigned on operator click

var equationEl = document.querySelector('.calc-equation');
var viewerEl = document.querySelector('.calc-viewer');
var equalEl = document.querySelector('.calc-equal');
var clearEl = document.querySelector('.calc-clear');
var resetEl = document.querySelector('.calc-reset');

function checkInputArr() {
  if (inputArr.length > 0) {
    var last = inputArr.pop();
    if (last !== inputOp) {
      return true;
    } else {
      return false;
    }
  }
}

// Numbers
numbers.forEach(function (v, i) {
  v.addEventListener('click', function (e) {
    e.preventDefault();
    var thisNumber = this.innerHTML;
    equationEl.innerHTML += thisNumber;
    viewerEl.innerHTML = thisNumber;
    inputArr.push(inputNum);
  });
});

// Operators
operators.forEach(function (v, i) {
  v.addEventListener('click', function (e) {
    e.preventDefault();
    if (checkInputArr()) {
      var thisOperator = this.innerHTML;
      equationEl.innerHTML += thisOperator;
      inputArr.push(inputOp);
    }
  });
});

// Calculate 
equalEl.addEventListener('click', function (e) {
  e.preventDefault();
  if (checkInputArr()) {
    viewerEl.innerHTML = eval(equationEl.innerHTML);
  }
});

// Clear & Reset
clearEl.addEventListener('click', function (e) {
  e.preventDefault();
  inputArr = [];
  equationEl.innerHTML = '';
  viewerEl.innerHTML = '0';
});
