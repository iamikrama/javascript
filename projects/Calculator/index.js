
const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.querySelector("#result"); // Assuming result is an ID

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") { // Fixed comparison
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputFieldEl.value = ""; // Clears the input field
}

function calculateResult() {
    try {
        // Use eval to calculate the result (ensure buttonValue is sanitized in a real app)
        inputFieldEl.value = eval(inputFieldEl.value);
    } catch (error) {
        inputFieldEl.value = "Error";
    }
}

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue; // Appends button value to the input field
}
