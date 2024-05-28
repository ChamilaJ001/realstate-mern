import { body, validationResult } from "express-validator";

export const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({ errors: errors.array() });
  };
};

export const loginValidator = [
  body("email").trim().isEmail().withMessage("Email is required."),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password should contain atleast 8 char."),
];

export const signupValidator = [
  body("name").notEmpty().withMessage("Name is required."),
  ...loginValidator,
];

export const addPropertyValidator = [
  body("title").notEmpty().withMessage("Title is required."),
  body("category").notEmpty().withMessage("Catrgory is required."),
];
