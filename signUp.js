const form = document.forms[0];
const firstname = form[0].value;
const lastname = form[1].value;
const username = form[2].value;
const Email = form[3].value;
const password = form[4].value;
const role = form[5].value;
const submitBtn = form[6];
let userData = [
  firstname,
  lastname,
  username,
  Email,
  password,
  role,
  submitBtn,
];
//For Sign Up
const checkEmptyInput = (inputs, form) => {
  inputs.forEach((el) => {
    if (el === "") {
      form.insertAdjacentElement(afterend, "Sorry,your inputs cannot be empty");
    }
  });
};
submitBtn.addEventListener("click", () => {
  e.preventDefault();
  checkEmptyInput(userData, form);
});
