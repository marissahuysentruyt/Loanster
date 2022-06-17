//THIS IS ONLY FOR THE MONTHLY PAYMENT TOGGLE CALCULATION!!!!!!!!!!!!!!!!!!!!

//principal loan amount; input by user
let principal = document.getElementById("principal")
principal = 
    principal.addEventListener("keyup", function(event) {
        principal = event.target.value;
        principal = Number(principal)
        console.log(`user entered ${principal}`)
        return principal;  
    })

//interest rate; selected by user
let rate = document.getElementById("interest-rate"); 
rate = 
    rate.addEventListener("mouseup", function(e) {
    rate = e.target.value
    rate = Number(rate)
    console.log(`user selected ${rate}`)
    return rate;
})
//number of payments; selected by user
let numberOfPayments; 

// tests
// principal = 60000
// rate = 12
// numberOfPayments = 84

// principal = 10000
// rate = 6.8
// numberOfPayments = 60

// principal = 250000
// rate = 2.84
// numberOfPayments = 360


//this function changes the rate into a decimal, then divide by 12 to get a monthly interest rate
let monthlyInterestRate = () => {
    let monthlyRate = (rate/100) / 12;
    return monthlyRate;
}
// test monthlyInterestRate
console.log(monthlyInterestRate())


//the top figure in the equation uses the rate (monthly interest rate) and the numberOfPayments. Add 1 to the rate, and exponentiate that by the numberOfPayments. Multiply that exponential number by the rate again.
let topFigure = (monthlyInterestRate() * ((1 + monthlyInterestRate()) ** numberOfPayments));
//the bottom figure in the equation uses the rate (monthly) and numberOfPayments again. Add 1 to the rate, exponentiate that by the numberOfPayments. Subtract one. 
let bottomFigure = (((1 + monthlyInterestRate()) ** numberOfPayments) - 1);
// test top/bottom figures
// console.log(topFigure)
// console.log(bottomFigure)

//this function takes the principal, topFigure and bottomFigure, returning a monthly payment amount. 
const monthlyLoanCalculation = () => {
    //calculate the monthly payment...divide the top figure by the bottom figure, then multiply the answer by the principal 

    // if(monthlyPaymentButton.classList.contains("active")) {
        let monthlyAmount = (principal * (topFigure/bottomFigure));
        monthlyAmount = monthlyAmount.toFixed(2)
        return monthlyAmount;
    } 
    // else if (loanDurationButton.classList.contains("active")) {
    //     console.log("not ready yet")
    // }

    // } 


console.log(`Monthly Payment is ${monthlyLoanCalculation()}.`)




