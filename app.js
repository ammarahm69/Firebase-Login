import { auth, createUserWithEmailAndPassword } from './firebase.mjs';


export function createAccount() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let phone = document.getElementById("phone");
  let username = document.getElementById("name");

  if (username.value === "" || password.value === "" || phone.value === "") {
    Swal.fire("Please fill all fields to create an account.");
    localStorage.setItem("user name", false);
    localStorage.setItem("user email", false);
    localStorage.setItem("user password", false);
    localStorage.setItem("user phone number", false);
  } else {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("Firebase", user);

        Swal.fire("Account created successfully");
        localStorage.setItem("user name", username.value);
        localStorage.setItem("user email", email.value);
        localStorage.setItem("user password", password.value);
        localStorage.setItem("user phone number", phone.value);

        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire(errorMessage);
      });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const createAccBtn = document.getElementById("create-Account");
  if (createAccBtn) {
    createAccBtn.addEventListener("click", createAccount);
  }
});
