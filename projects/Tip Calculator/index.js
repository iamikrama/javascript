document.getElementById("calculate").addEventListener("click", () => {
    const bill = parseFloat(document.getElementById("bill").value);
    const tipPercentage = parseFloat(document.getElementById("tip").value);
    const people = parseInt(document.getElementById("people").value);

    // Validate input
    if (isNaN(bill) || bill <= 0) {
        alert("Please enter a valid bill amount!");
        return;
    }

    if (isNaN(tipPercentage) || tipPercentage < 0) {
        alert("Please enter a valid tip percentage!");
        return;
    }

    if (isNaN(people) || people <= 0) {
        alert("Please enter a valid number of people!");
        return;
    }

    // Calculate tip and total per person
    const tipAmount = (bill * tipPercentage) / 100;
    const totalAmount = bill + tipAmount;
    const tipPerPerson = tipAmount / people;
    const totalPerPerson = totalAmount / people;

    // Update results
    document.getElementById("tip-per-person").textContent = `Tip Per Person: Rs ${tipPerPerson.toFixed(2)}`;
    document.getElementById("total-per-person").textContent = `Total Per Person: Rs ${totalPerPerson.toFixed(2)}`;
});
