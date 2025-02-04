import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const middlewareAuthorization = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("Not Authorized");
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    req.user = payload.user;

    next();
  } catch (error) {
    console.error(error.message);
    return res.status(403).json("Not Authorized");
  }
};

export default middlewareAuthorization;
