const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validatorLoginInput = (data) => {
  let errors = {};

  let { email, password } = data;
  // Convert empty fields to empty string so the validator can process it
  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";

  // Email validation
  if (Validator.isEmpty(email)) {
    errors.email = "Email address is required";
  } else if (!Validator.isEmail(email)) {
    errors.email = "Enter a valid email address please";
  }
  //
  if (Validator.isEmpty(password)) {
    errors.password = "Please enter a password";
  } else if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
