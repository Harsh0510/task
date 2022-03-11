const validateFormValues = ({
  firstName,
  lastName,
  password,
  emailAddress,
  mobileNumber,
}) => {
  const errors = {};

  const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;

  const passwordRegex =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

  // *********** FIRST NAME VALIDATION ***********

  if (!firstName) {
    errors.firstName = `First Name Required`;
  } else if (firstName.length < 1 || firstName.length > 50) {
    errors.firstName = `First Name between 1-50 characters`;
  }

  // *********** LAST NAME VALIDATION ***********

  if (!lastName) {
    errors.lastName = `First Name Required`;
  } else if (lastName.length < 1 || lastName.length > 50) {
    errors.lastName = `First Name between 1-50 characters`;
  }

  // *********** EMAIL VALIDATION ***********

  if (!emailAddress) {
    errors.emailAddress = `Email is required`;
  } else if (!emailRegex.test(emailAddress)) {
    errors.emailAddress = `Email must be in a valid email format`;
  }

  // *********** PASSWORD VALIDATION ***********

  if (!password || password.length < 9) {
    errors.password = `Password must be at least 8 characters.`;
  } else if (!passwordRegex.test(password)) {
    errors.password = `Password must be 9 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.`;
  }

  return errors;
};
export { validateFormValues };
