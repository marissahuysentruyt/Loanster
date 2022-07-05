//THIS IS FOR DISPLAYING THE RESULTS FOR THE CALCULATIONS!!!!!!!!!!!!!

//variables for calculate button, and clear button
let calculateButton = document.querySelector(".submit");
let clearButton = document.querySelector("button");

//clearForm should replace all the input values to blank strings, leaving their placeholders visible once more
clearForm = () => {
    document.querySelector("#principal").value = "";
    document.querySelector("#interest-rate").value = "";
    document.querySelector("#dropdown").value = "";
    document.querySelector("#monthly-payment").value = "";

    //quick log just to make sure clearForm works
    console.log("form cleared")
   
}

//when the clearButton is clicked...
clearButton.addEventListener("click", function() {
    //clearForm runs
    clearForm();
    //the calculateButton removes class=disabled so the button is active again
    calculateButton.classList.remove("disabled")
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
        console.log("monthly loan payment will be calculated")
        monthlyLoanCalculation()
    }

    //if loanDurationButton is selected on the left-hand side
    if(loanDurationButton.classList.contains("active")) {
        //console logs months left and calculateMonthsLeft runs
        console.log("months left will be calculated")
        calculateMonthsLeft();
        
    }

    //once either function runs, the console should log that it's done calculating
    console.log("calculated")
})



