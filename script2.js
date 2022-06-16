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

//dropdown menu, monthly payment input, outputs
let dropdown = document.querySelector(".input-duration");
let preferredMonthlyPayment = document.querySelector(".input-monthly-payment")


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

    //change input field
    dropdown.style.display = "flex"
    preferredMonthlyPayment.style.display = "none"

    //change output
    

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

    //change input field
    dropdown.style.display = "none"
    preferredMonthlyPayment.style.display = "flex"
    preferredMonthlyPayment.style.flexDirection = "column"

    //change output
    
})

