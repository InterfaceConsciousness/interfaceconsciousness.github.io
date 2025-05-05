function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "interface") {
        window.location.href = "index.html"; // Redirect to main site
    } else {
        alert("Incorrect password!");
    }
}
