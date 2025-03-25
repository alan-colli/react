import jwt from "jsonwebtoken";

const KEY = process.env.SECRET_KEY;

export const authToken = (req, res, next) => {
  const authHeader = req.headers["auth"];

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Invalid token format" });
  }

  jwt.verify(token, KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = user;
    next(); // Call next() to proceed to the next middleware or route handler in the request-response cycle.
  });
};
