const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullname").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Check for empty fields
  if (
    fullName === "" ||
    username === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("All fields are required!");
    return;
  }

  // Full name validation
  if (fullName.length < 3) {
    alert("Full name must be at least 3 characters.");
    return;
  }

  // Username validation
  if (username.length < 4) {
    alert("Username must be at least 4 characters.");
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Password validation
  if (password.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
});
