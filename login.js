const loginForm = document.getElementById("loginForm");
// const message = document.getElementById("message");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  

  // Empty field validation
  if (email === "" || password === "") {
    message.textContent = "All fields are required.";
    return;
  }

  // email length validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Password length validation
  if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
    return;
  }
});
