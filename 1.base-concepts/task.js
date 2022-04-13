"use strict"
function solveEquation(a, b, c) {
  if ( a == 0)
  return false;
  let arr = {};
  let D = b ** 2 - 4 * a * c;
  console.log ('D = ' + D);

    if (D > 0) {
    let x = [];
    x.push((-b + Math.sqrt(D)) / (2 * a));
    x.push((-b - Math.sqrt(D)) / (2 * a));
    arr = x;
     } else if (D == 0) {
    arr = (-b / (2 * a));
     } else if (D < 0) {
    return false;
    arr = D;
     };

  return arr;
 }
  
  

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
