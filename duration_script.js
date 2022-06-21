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

    return Number(principal.toFixed(2));
};



// this function should run calculateNewPrincipal over and over until the principal === 0, then display the total amount of monthly payments until a user can pay off their loan

let calculateMonthsLeft = () => {
    //monthsToPay is an empty array
    let monthsToPay = [];

    //starting with i = 0, as long as the principal is greater than 0, increase i by 1 each time you loop
    for(let i = 0; principal > 0; i++) {
        //if the principal is exactly 0
        if(principal === 0) {
            //log you paid the loan
            console.log(`you paid off your loan`)

            //otherwise, if the principal is still greater than 0...
        } else if (principal > 0) {
            //test: initial principal with 2 decimal places at the beginning of every loop
            // console.log(principal.toFixed(2));
    
            //starting with i = 1, as long as the principal is greater than 0, increase i by 1 each time you loop
            for(let i = 1; principal > 0; i++) {
                //run calculateNewPrincipal over and over
                calculateNewPrincipal();
                //tests for outputting the principal, and i
                // console.log(`principal is ${principal.toFixed(2)}`);
                // console.log(`item is at ${i}`)

                //push i into the monthsToPay array
                monthsToPay.push(i)

            } 
        }  
        //return the last item of monthsToPay
        // console.log(monthsToPay)
        return monthsToPay.pop()
    }
    return monthsToPay.pop()
}


