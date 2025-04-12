const form = document.getElementById("registration");
const output = document.getElementById("output");


form.addEventListener("submit", function (event) {
    event.preventDefault();


    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const birthday = document.getElementById("birthday").value;

    
    const interests = Array.from(document.querySelectorAll("input[name='interests']:checked"))
        .map(input => input.value);

        const outputDiv = document.getElementById("output")
        const urlParams = new URLSearchParams(window.location.search);
   
    const outputContent = `
        <h3>Submitted Information:</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Birthday:</strong> ${birthday}</p>
        <p><strong>Interests:</strong> ${interests.join(", ") || "None"}</p>
    `;

    if (interests) {
        outputContent += '<p><strong>Interests:</strong> ${interests.replace(/,/g, ",") || "None"}'</p>;
    } else{
        outputContent += '<p><strong>Interests:</strong> None</p>';
    }
    output.innerHTML = outputContent;
});
       
   
