const registerBtn = document.getElementById("registerButton");

registerBtn.addEventListener("click", () => {
  const password = document.getElementById("yourPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  if (password.value === confirmPassword.value) {
    const name = document.getElementById("yourName");
    const lastName = document.getElementById("yourLastName");
    const email = document.getElementById("yourEmail");

    alert(
      `Registration Successful! ${name.value} ${lastName.value} ${email.value} `
    );
  } else {
    alert("Passwords do not match. Please try again.");
  }
});
