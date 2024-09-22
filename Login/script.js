document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

   
    if (username === "admin" && password === "12345") {
        
        window.location.href = "Payment.html";
    } else {
   
        errorMessage.textContent = "Username atau password salah!";
        errorMessage.style.display = 'block';  
    }
});
