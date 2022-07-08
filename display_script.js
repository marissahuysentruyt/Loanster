//THIS IS FOR DISPLAYING THE RESULTS FOR THE CALCULATIONS!!!!!!!!!!!!!

//variables for calculate button, clear button, monthly/remaining output cards after calculating, 
let calculateButton = document.querySelector(".submit");
let clearButton = document.querySelector("button");
//DECLARED IN SCRIPT.JS: monthlyPaymentOutput & loanDurationOutput

//these are after they're green
let calculatedMonthly = document.querySelector("#calc-monthly-payment");
let calculatedRemaining = document.querySelector("#months-remaining");

// test
// calculatedRemaining.style.color = "black"
// calculatedMonthly.style.color = "orange"

//to store results of calculations
let results;


//clearForm should replace all the input values to blank strings, leaving their placeholders visible once more
clearForm = () => {
    document.querySelector("#principal").value = "";
    document.querySelector("#interest-rate").value = "";
    document.querySelector("#dropdown").value = "";
    document.querySelector("#monthly-payment").value = "";

    //reverts to uncalculated output cards
    if(monthlyPaymentOutput.classList.contains("active")) {
        //remove the calculated-monthly class 
        monthlyPaymentOutput.classList.remove("calculated-monthly");
        calculatedMonthly.innerText = "0.00";
    }

    if(loanDurationOutput.classList.contains("active")) {
        //remove the calculated-remaining class 
        loanDurationOutput.classList.remove("calculated-remaining");
        calculatedRemaining.innerText = 0;
    }

    //quick log to make sure clearForm works
    console.log("form cleared")
   
}

//when the clearButton is clicked...
clearButton.addEventListener("click", function() {
    //clearForm runs
    clearForm();
    //the calculateButton removes class=disabled so the button is active again
    calculateButton.classList.remove("disabled");

})

//when calculateButton is clicked...
calculateButton.addEventListener("click", function() {
    //the clearButton becomes visible
    clearButton.style.visibility = "visible";
    //the calculateButton is disabled visually (I'm not sure it's actually disabled, as in a user couldn't click it?)
    calculateButton.classList.add("disabled")
    

    //if monthlyPaymentButton is selected on the left-hand side
    if(monthlyPaymentButton.classList.contains("active")) {
        //console logs monthly loan payment and the monthlyLoanCalculation runs
        console.log("monthly loan payment will be calculated");

        //add calculated-monthly class so the output card changes to green styles
        monthlyPaymentOutput.setAttribute("class", "monthly-outputs calculated-monthly active")
        results = Number(monthlyLoanCalculation());
        

        calculatedMonthly.innerText = results;

        // return results
    }

    //if loanDurationButton is selected on the left-hand side
    if(loanDurationButton.classList.contains("active")) {
        //console logs months left and calculateMonthsLeft runs
        console.log("months left will be calculated");
        //add calculated-remaining class so the output card changes to green styles
        loanDurationOutput.setAttribute("class", "remaining-months calculated-remaining active");
        results = Number(calculateMonthsLeft());

        calculatedRemaining.innerText = results

        // return results
        
    }

    //once either function runs, the console should log that it's done calculating
    console.log(`calculated ${results}`)
})



