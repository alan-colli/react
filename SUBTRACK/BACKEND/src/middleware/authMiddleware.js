import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

export const authenticationToken = (req, res, next) => {
  const token = req.header["authorization"];
  if (!token) {
    return res.status(401).json({ error: "Acces denied" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.user = user;
    next();
  });
};
