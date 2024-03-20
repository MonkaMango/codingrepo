//Site input scripts
const form = document.querySelector("form[fullname='contact-form']");
const fullnameInput = document.querySelector("input[fullname='name']");
const zipcodeInput = document.querySelector("input[name='zipcode']");
//Input Value
fullnameInput.isValid = () => !!fullnameInput.value;
zipcodeInput.isValid = () => isValidzipcode(phoneInput.value);

const inputFields = [fullnameInput, zipcodeInput,];

//String Variable
const isValidzipcode = (zipcode) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(zipcode).toLowerCase());
};
//let-if-else
let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};
//Submit button application
form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));