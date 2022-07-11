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
    let selectedRate = document.querySelector(".selected-rate.active")
    selectedRate.innerText = `${rate}%`;
    // return rate;
})



//monthly payment amount; input by user
//USED IN DURATION SCRIPT!
let monthlyPayment = document.getElementById("monthly-payment");
monthlyPayment = 
    monthlyPayment.addEventListener("keyup", function(e) {
        monthlyPayment = e.target.value;
        monthlyPayment = Number(monthlyPayment);
        console.log(`user entered ${monthlyPayment}`);
        return monthlyPayment;
    })

//number of payments; selected by user 
let numberOfPayments;
//this function is called inline at the select element. onchange="selectedOption()"
selectedOption = () => {
        //this gets all the options from the select element, id=dropdown
        let optionsNode = document.getElementById("dropdown");
        //cast as a Number
        //looking inside the optionsNode, at options, identify the selected options's index, and assign the value to chosenOption
        let chosenOption = Number(optionsNode.options[optionsNode.selectedIndex].value);
        //reassign numberOfPayments the same as chosenOption
        numberOfPayments = chosenOption;
        console.log(`user selected ${numberOfPayments}`)
        return numberOfPayments;
};
//reassign the results of the function to numberOfPayments
numberOfPayments = selectedOption();


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
// console.log(monthlyInterestRate())




//this function takes the principal, topFigure and bottomFigure, returning a monthly payment amount. 
const monthlyLoanCalculation = () => {
    //calculate the monthly payment...divide the top figure by the bottom figure, then multiply the answer by the principal 

        // if(monthlyPaymentButton.classList.contains("active")) {
        monthlyInterestRate();
        //the top figure in the equation uses the rate (monthly interest rate) and the numberOfPayments. Add 1 to the rate, and exponentiate that by the numberOfPayments. Multiply that exponential number by the rate again.
        let topFigure = (monthlyInterestRate() * ((1 + monthlyInterestRate()) ** numberOfPayments));
        //the bottom figure in the equation uses the rate (monthly) and numberOfPayments again. Add 1 to the rate, exponentiate that by the numberOfPayments. Subtract one. 
        let bottomFigure = (((1 + monthlyInterestRate()) ** numberOfPayments) - 1);
        // test top/bottom figures
        // console.log(topFigure)
        // console.log(bottomFigure)

        //the monthlyAmount takes the principal and multiplies by the topFigure divided by the bottomFigure
        let monthlyAmount = (principal * (topFigure/bottomFigure));
        //stop the decimal at 2 places
        monthlyAmount = monthlyAmount.toFixed(2)
        // return the monthlyAmount
        return monthlyAmount;
    } 
    // else if (loanDurationButton.classList.contains("active")) {
    //     console.log("not ready yet")
    // }

    // } 


// console.log(`Monthly Payment is ${monthlyLoanCalculation()}.`)