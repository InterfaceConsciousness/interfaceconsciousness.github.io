function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "your_password") {
        sessionStorage.setItem("authenticated", true);
        window.location.href = "/"; // Redirect to homepage
    } else {
        alert("Incorrect password!");
    }
}
