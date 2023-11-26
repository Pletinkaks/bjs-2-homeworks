"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2) - (4 * a * c);
	if (d < 0) {
		arr.push();
	} else if (d == 0) {
		let oneRoot = -b / (2 * a);
		arr.push(oneRoot);
	} else if (d > 0) {
		let firstRoot = (-b + Math.sqrt(d)) / (2 * a);
		let secondRoot = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(firstRoot, secondRoot);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	
  if (isNaN(percent)) {
    return false;
  }

  if (isNaN(contribution)) {
    return false;
  }

  if (isNaN(amount)) {
    return false;
  }
  let monthlyPercentage = ((percent/100)/12);
  let loanBody = (amount-contribution);
  let montlyPayment = (loanBody*(monthlyPercentage+(monthlyPercentage/(((1+monthlyPercentage)**countMonths)-1))));
  let totalAmount = (montlyPayment*countMonths);
  return +(totalAmount.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 20000, 24.));
