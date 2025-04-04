import jwt from "jsonwebtoken";

export const authToken = (req, res, next) => {
  const authHeader = req.headers["auth"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).json({ msg: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ msg: "Forbidden" });
    } else {
      req.user = user;
      next();
    }
  });
};
