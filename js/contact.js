document.getElementById("sendData").addEventListener("click", function() {
    // Get form data
    const email = document.getElementById("email").value;
    const number = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Create an object with the form data
    const data = {
        email: email,
        number: number,
        message: message
    };

    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbwl25XgEeqQPfJGl0Y7CpncUWOso91mIF7jd0oBJti2AD2IpW18kBy89yXSY2IeUSsr/exec", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Define the callback function to handle the response
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Request was successful
            const response = JSON.parse(xhr.responseText);
            console.log("Response:", response);
        } else {
            // Request failed
            console.error("Request failed with status:", xhr.status);
        }
    };

    // Convert the data to JSON format
    const jsonData = JSON.stringify(data);

    // Send the POST request with the data
    xhr.send(jsonData);
});
