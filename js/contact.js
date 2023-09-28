document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Collect form data
        const email = document.getElementById('email').value;
        const number = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Create an object with the form data
        const formData = {
            email,
            number,
            message
        };
        
        // Send the form data to your server or Google Apps Script
        sendDataToServer(formData);
    });
    
    // Function to send data to the server or Google Apps Script
    function sendDataToServer(formData) {
        // Replace 'YOUR_SCRIPT_URL' with the URL of your server script or Google Apps Script
        fetch('https://script.google.com/macros/s/AKfycbwFm9dvPjoBPQIS9Kes3CocaYjO58NduBzCRFmO5y0xA6ScaqxIDv1IfOxBBmYTlFPBeQ/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(result => {
            // Handle the result (e.g., show a success message)
            console.log(result);
            // Optionally, you can reset the form
            contactForm.reset();
        })
        .catch(error => {
            // Handle errors
            console.error(error);
        });
    }
});