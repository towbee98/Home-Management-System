const togglePassword = document.querySelector("#toggle-password");
const password = document.querySelector("#password");
console.log(togglePassword.classList);
togglePassword.addEventListener("click", () => {
  const type = password.type === "password" ? "text" : "password";
  password.setAttribute("type", type);
  togglePassword.classList.toggle("fa-eye-slash");
});
