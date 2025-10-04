// Function to add two numbers from the input fields
function addNumbers() {
    // Get values from the input fields
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    // Convert input values to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Result: Please enter valid numbers!";
        return;
    }

    // Calculate sum
    let sum = num1 + num2;

    // Display result
    document.getElementById('result').textContent = "Result: " + sum;
}
