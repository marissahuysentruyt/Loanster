//BLUE COLUMN ONLY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//h3 buttons should change h1 text question and the input fields

// monthlyPaymentButton defaults to active
let monthlyPaymentButton = document.querySelector("h3.monthly");
//loanDurationButton defaults to inactive
let loanDurationButton = document.querySelector("h3.duration") 

// setting & removing classes so buttons change
// loanDurationButton.setAttribute("class", "active")
// loanDurationButton.removeAttribute("active")
// loanDurationButton.setAttribute("class", "inactive")
// loanDurationButton.removeAttribute("inactive")
// monthlyPaymentButton.setAttribute("class", "active");
// monthlyPaymentButton.removeAttribute("active");
// monthlyPaymentButton.setAttribute("class", "inactive");
// monthlyPaymentButton.removeAttribute("inactive");

let monthlyQuestion = document.querySelector("h1.active");
let durationQuestion = document.querySelector("h1.inactive");

// setting & removing classes so h1 changes
// durationQuestion.setAttribute("class", "active") 
// durationQuestion.removeAttribute("active") 
// durationQuestion.setAttribute("class", "inactive") 
// durationQuestion.removeAttribute("inactive") 
// monthlyQuestion.setAttribute("class", "active") 
// monthlyQuestion.removeAttribute("active")
// monthlyQuestion.setAttribute("class", "inactive") 
// monthlyQuestion.removeAttribute("inactive") 






//INPUT COLUMN ONLY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//dropdown menu, monthly payment input, outputs
//dropdown defaults to active
let dropdown = document.querySelector(" p.input-duration.active ");
//preferredMonthlyPayment defaults to inactive
let preferredMonthlyPayment = document.querySelector("p.input-monthly-payment.inactive")
//monthlyPaymentOutput defaults to active
let monthlyPaymentOutput = document.querySelector(".monthly-outputs.active")
//loanDurationOutput defaults to inactive
let loanDurationOutput = document.querySelector(".remaining-months.inactive")


// setting & removing classes so input field changes
// dropdown.setAttribute("class", "input-duration inactive")
// dropdown.classList.remove("inactive")
// dropdown.setAttribute("class", "input-duration active")
// dropdown.classList.remove("active")
// preferredMonthlyPayment.setAttribute("class", "input-monthly-payment inactive")
// preferredMonthlyPayment.classList.remove("inactive")
// preferredMonthlyPayment.setAttribute("class", "input-monthly-payment active")
// preferredMonthlyPayment.classList.remove("active")
// monthlyPaymentOutput.setAttribute("class", "monthly-outputs active")
// monthlyPaymentOutput.classList.remove("active")
// monthlyPaymentOutput.setAttribute("class", "monthly-outputs inactive")
// monthlyPaymentOutput.classList.remove("inactive")
// loanDurationOutput.setAttribute("class", "remaining-months active")
// loanDurationOutput.classList.remove("active")
// loanDurationOutput.setAttribute("class", "remaining-months inactive")
// loanDurationOutput.classList.remove("inactive")







//toggle calculation buttons
monthlyPaymentButton.addEventListener("click", function() {
    // test: monthlyPaymentButton.style.border = "1px solid red"
    // test: monthlyQuestion.innerText = "changed"

    // correct button & h1 are displayed
    monthlyPaymentButton.setAttribute("class", "active");
    monthlyPaymentButton.removeAttribute("inactive");
    monthlyQuestion.removeAttribute("inactive")
    monthlyQuestion.setAttribute("class", "active"); 
    // loanDurationButton & durationQuestion should be "off"
    durationQuestion.removeAttribute("active")
    durationQuestion.setAttribute("class", "inactive")
    loanDurationButton.removeAttribute("active")
    loanDurationButton.setAttribute("class", "inactive")

    //change input fields
    //dropdown is on, prefMonth... is off
    dropdown.classList.remove("inactive")
    dropdown.setAttribute("class", "input-duration active")
    preferredMonthlyPayment.classList.remove("active")
    preferredMonthlyPayment.setAttribute("class", "input-monthly-payment inactive")

    //change output
    monthlyPaymentOutput.setAttribute("class", "monthly-outputs active")
    monthlyPaymentOutput.classList.remove("inactive")
    loanDurationOutput.classList.remove("active")
    loanDurationOutput.setAttribute("class", "remaining-months inactive")

})

loanDurationButton.addEventListener("click", function() {
    // test: loanDurationButton.style.border = "1px solid red"

    //correct button & h1 are displayed
    durationQuestion.removeAttribute("inactive")
    durationQuestion.setAttribute("class", "active") 
    loanDurationButton.setAttribute("class", "active")
    loanDurationButton.removeAttribute("inactive")
    //monthlyPaymentButton & monthlyQuestion should be "off"
    monthlyPaymentButton.removeAttribute("active")
    monthlyPaymentButton.setAttribute("class", "inactive")
    monthlyQuestion.removeAttribute("active")
    monthlyQuestion.setAttribute("class", "inactive")
    
    // test: durationQuestion.innerText = "changed"
    
    //change input fields
    //dropdown is off, prefMonth... is on
    dropdown.classList.remove("active")
    dropdown.setAttribute("class", "input-duration inactive")
    preferredMonthlyPayment.classList.remove("inactive")
    preferredMonthlyPayment.setAttribute("class", "input-monthly-payment active")


    //change output
    monthlyPaymentOutput.setAttribute("class", "monthly-outputs inactive")
    monthlyPaymentOutput.classList.remove("active")
    loanDurationOutput.classList.remove("inactive")
    loanDurationOutput.setAttribute("class", "remaining-months active")
})


