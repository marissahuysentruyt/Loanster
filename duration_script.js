//THIS IS ONLY FOR THE LOAN DURATION TOGGLE CALCULATION!!!!!!!!!!!!!!!!!!!!

// DECLARATIONS ARE IN THE MONTHLY_SCRIPT FILE

//this function should go through 1 month of paying on a loan, returning the new principal to work with the next month
let calculateNewPrincipal = () => {
    //the interestAmount is the amount of the monthlyPayment that goes towards interest
    let interestAmount = principal * monthlyInterestRate();
    // console.log(interestAmount)

    //the paidOffAmount is the remaining amount of the payment that DOESN'T goe towards interest
    let paidOffAmount = monthlyPayment - interestAmount;
    paidOffAmount = paidOffAmount.toFixed(2);

    //the newPrincipal will rewrite the original principal (to use for the next month)
    let newPrincipal = principal - paidOffAmount;
    principal = newPrincipal

    return `new principal is ${principal}`;
};

// let calculateMonthsLeft = () => {
//     let monthsLeft = 1;

//     for(let monthsLeft = 1; principal > 0; monthsLeft++) {
//     // console.log(principal);
//     if(principal === 0) {
//         console.log(`user paid off loan in ${monthsLeft} months`)

//     } else {
//         calculateNewPrincipal();
//         console.log(principal)
//     }
//     monthsLeft = monthsLeft++;
//     console.log(monthsLeft)
    
// }
//     return `user paid off loan in ${monthsLeft} months`

// }

