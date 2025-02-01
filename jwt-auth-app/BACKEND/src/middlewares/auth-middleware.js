import { validationResult } from "express-validator";
import passport from "passport";

export const validationMiddleware = (req, res, next) => {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};

export const userAuth = passport.authenticate("jwt", { session: false });
