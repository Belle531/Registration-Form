// Select the form and the output div
const form = document.getElementById("registration");
const output = document.getElementById("output");

// Add an event listener for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the page from refreshing

    // Collect form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const birthday = document.getElementById("birthday").value;

    // Collect selected interests (checkboxes)
    const interests = Array.from(document.querySelectorAll("input[name='interests']:checked"))
        .map(input => input.value);

    // Create the output content
    const outputContent = `
        <h3>Submitted Information:</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Birthday:</strong> ${birthday}</p>
        <p><strong>Interests:</strong> ${interests.join(", ") || "None"}</p>
    `;

    // Display the output content
    output.innerHTML = outputContent;
});