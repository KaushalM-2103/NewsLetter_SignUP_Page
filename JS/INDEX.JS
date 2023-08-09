const emailInput = document.getElementById("emailInput");
const errorMessage = document.getElementById("errormessage");
const signUp = document.getElementById("signupForm");
const successMessage = document.getElementById("successMessageCard");
const emmailExistMessage = document.getElementById("existError");
const emailConfiguration = document.getElementById("emailConfirmation");
const storedEmails = JSON.parse(localStorage.getItem("userEmails")) || [];

function validateEmail() {
  const email = emailInput.value.trim();

  // Regular expression for validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // If email is not match with emailRegex show the message or hide it.
  if (emailRegex.test(email)) {
    if (storedEmails.includes(email)) {
      emmailExistMessage.classList.remove("d-none")
      errorMessage.classList.remove("invalid__Error");
      emailInput.classList.remove("input__Error");
    } else {
      storedEmails.push(email);
      localStorage.setItem("userEmails", JSON.stringify(storedEmails));
      console.log("Email Valid");
      successMessage.classList.remove("d-none");
      emailConfiguration.innerText = emailInput.value;
      signUp.classList.add("d-none");
      emmailExistMessage.classList.add("d-none")
    }
  } else {
    errorMessage.classList.add("invalid__Error");
    emailInput.classList.add("input__Error");
    console.log("Email Invalid");
  }
}

validateBtn.addEventListener("click", () => {
  validateEmail();
});

dismissBtn.addEventListener("click", () => {
  successMessage.classList.add("d-none");
  signUp.classList.remove("d-none");
  emailInput.value = "";
  window.location.reload();
});
