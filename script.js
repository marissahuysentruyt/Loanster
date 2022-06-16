//this is for the monthly payment toggle
let principal; //principal loan amount; input by user
let rate; //interest rate; selected by user
let numberOfPayments; //number of payments; selected by user

// tests
// principal = 60000
// rate = 12
// numberOfPayments = 84

// principal = 10000
// rate = 6.8
// numberOfPayments = 60

principal = 250000
rate = 2.84
numberOfPayments = 360


//this function changes the rate into a decimal, then divide by 12 to get a monthly interest rate
let monthlyRate = () => {
    let monthlyRate = (rate/100) / 12;
    return monthlyRate;
}
// test monthlyRate
// console.log(monthlyRate())


//the top figure in the equation uses the rate (monthly interest rate) and the numberOfPayments. Add 1 to the rate, and exponentiate that by the numberOfPayments. Multiply that exponential number by the rate again.
let topFigure = (monthlyRate() * ((1 + monthlyRate()) ** numberOfPayments));
//the bottom figure in the equation uses the rate (monthly) and numberOfPayments again. Add 1 to the rate, exponentiate that by the numberOfPayments. Subtract one. 
let bottomFigure = (((1 + monthlyRate()) ** numberOfPayments) - 1);
// test top/bottom figures
// console.log(topFigure)
// console.log(bottomFigure)

//this function takes the principal, topFigure and bottomFigure, returning a monthly payment amount. 
const loanCalculation = () => {
    //calculate the monthly payment...divide the top figure by the bottom figure, then multiply the answer by the principal 
    let monthlyAmount = (principal * (topFigure/bottomFigure));
    monthlyAmount = monthlyAmount.toFixed(2)
    return monthlyAmount;
}

console.log(`Monthly Payment is ${loanCalculation()}.`)




