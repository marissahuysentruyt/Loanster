//this is for the monthly payment toggle
let principal; //principal loan amount; input by user
let rate; //interest rate; selected by user
let numberOfPayments; //number of payments; selected by user


//this function changes the rate into a decimal, then divide by 12 to get a monthly interest rate
let changeRate = (rate) => {
    return (rate/100) / 12;
}

//the top figure in the equation uses the rate (monthly interest rate) and the numberOfPayments. Add 1 to the rate, and exponentiate that by the numberOfPayments. Multiply that exponential number by the rate again.
let topFigure = rate * ((1 + rate) ** numberOfPayments);
//the bottom figure in the equation uses the rate (monthly) and numberOfPayments again. Add 1 to the rate, exponentiate that by the numberOfPayments. Subtract one. 
let bottomFigure = ((1 + rate) ** numberOfPayments) - 1;


//this function takes the principal, topFigure and bottomFigure, returning a monthly payment amount. 
const loanCalculation = (principal, topFigure, bottomFigure) => {
    //calculate the monthly payment...divide the top figure by the bottom figure, then multiply the answer by the principal 
    let monthlyAmount = principal * (topFigure/bottomFigure)
    return monthlyAmount;
}


