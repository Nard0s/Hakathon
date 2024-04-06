const users = [];

// Get references to the input fields and the register button
const fullNameInput = document.getElementById("nam");
const idInput = document.getElementById("id");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pass");
const registerButton = document.querySelector("button");

// Event listener for the register button
registerButton.addEventListener("click", () => {
    // Retrieve the values entered by the user
    const fullName = fullNameInput.value.trim();
    const idNumber = idInput.value.trim();
    const emailAddress = emailInput.value.trim();
    const userPassword = passwordInput.value.trim();

    // Initialize an empty error message
    let errorMessage = "";

    // Check if any input field is empty
    if (!fullName || !idNumber || !emailAddress || !userPassword) {
        errorMessage = "Error: Please fill in all required fields.";
    }

    // Check for valid email format
    else if (!isValidEmail(emailAddress)) {
        errorMessage = "Error: Please enter a valid email address.";
    }

    // If there's an error, display it and stop registration
    if (errorMessage) {
        alert(errorMessage);
        return;
    }

    // Create an object to represent the user
    const user = {
        fullName,
        idNumber,
        emailAddress,
        userPassword
    };

    // Add the user object to the array
    users.push(user);

    // Store users data in localStorage
    localStorage.setItem("usersData", JSON.stringify(users));

    // Display a success message
    alert("User registered successfully!");
    console.log("Total registered users:", users.length);
    console.log("User data:", user);

    // Clear input fields after successful registration
    fullNameInput.value = "";
    idInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
});

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}