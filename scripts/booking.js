/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35; // Default daily rate for full day
let selectedDays = []; // Array to track selected days
const calculatedCostElement = document.getElementById("calculated-cost");
const dayButtons = document.querySelectorAll(".day-selector li");
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");

function updateCost() {
    const totalCost = dailyRate * selectedDays.length;
    calculatedCostElement.innerHTML = totalCost;
}

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function toggleDay(dayElement) {
    const dayId = dayElement.id;

    if (dayElement.classList.contains("clicked")) {
        dayElement.classList.remove("clicked");
        selectedDays = selectedDays.filter(day => day !== dayId);
    } else {
        dayElement.classList.add("clicked");
        selectedDays.push(dayId);
    }

    updateCost();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    selectedDays = [];
    dayButtons.forEach(button => button.classList.remove("clicked"));
    calculatedCostElement.innerHTML = "0";
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function setHalfDayRate() {
    dailyRate = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    updateCost();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function setFullDayRate() {
    dailyRate = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    updateCost();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
dayButtons.forEach(button => {
    button.addEventListener("click", () => toggleDay(button));
});

clearButton.addEventListener("click", clearDays);

halfButton.addEventListener("click", setHalfDayRate);

fullButton.addEventListener("click", setFullDayRate);

