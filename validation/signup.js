const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validatorLoginInput = (data) => {
  let errors = {};

  let { user_name, email, password } = data;
  // Convert empty fields to empty string so the validator can process it
  user_name = !isEmpty(user_name) ? user_name : "";
  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";
  //

  //Username validation
  if (Validator.isEmpty(user_name)) {
    errors.user_name = "Username is required";
  }
  //

  //Email Validation
  if (Validator.isEmpty(email)) {
    errors.email = "Email address is required";
  } else if (!Validator.isEmail(email)) {
    errors.email = "Enter a valid email address please";
  }
  //

  //Password Validation
  if (Validator.isEmpty(password)) {
    errors.password = "Please enter a password";
  } else if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }
  //
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
