const Joi = require("joi");

// ************** validate user ***************
const validateUser = (user) => {
  const joiSchema = Joi.object({
    firstName: Joi.string().min(1).max(50).trim().required(),
    lastName: Joi.string().min(1).max(50).trim().required(),
    password: Joi.string()
      .min(8)
      .max(1024)
      .trim()
      .required()
      .pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/),
    emailAddress: Joi.string().trim().email().required(),
    mobileNumber: Joi.string()
      .trim()
      .required()
      .pattern(/^[6-9]{1}[0-9]{9}$/),
  });
  return joiSchema.validate(user);
};

module.exports = {
  validateUser,
};
