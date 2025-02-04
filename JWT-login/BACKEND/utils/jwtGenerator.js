import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const jwtGenerator = (user_id) => {
  const payload = {
    user: user_id,
  };
  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: 60 * 60 });
};

export default jwtGenerator;
