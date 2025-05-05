function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "your_password") { // Set your password here
        sessionStorage.setItem("authenticated", true); // Store authentication
        window.location.href = "/"; // Redirect back to main site
    } else {
        alert("Incorrect password! Try again.");
    }
}
