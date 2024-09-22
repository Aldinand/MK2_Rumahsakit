document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const tickets = document.getElementById('tickets').value;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (validateEmail(email) && tickets > 0) {
        successMessage.textContent = `Reservation Successful! ${tickets} ticket(s) reserved for ${email}.`;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.textContent = "Please enter a valid email and number of tickets.";
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
