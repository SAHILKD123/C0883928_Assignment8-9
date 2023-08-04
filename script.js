function register() {
    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const gender = document.querySelector("input[name='gender']:checked");
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Check for blank inputs and display appropriate error messages
    if (!firstName) {
      alert("Please enter your first name.");
      return;
    }
  
    if (!lastName) {
      alert("Please enter your last name.");
      return;
    }
  
    if (!dob) {
      alert("Please enter your date of birth.");
      return;
    }
  
    if (!gender) {
      alert("Please select your gender.");
      return;
    }
  
    if (!password) {
      alert("Please enter a password.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // All inputs are valid, proceed with registration logic here
    alert("Registration successful!");
    document.getElementById("registrationForm").reset();
  }
  