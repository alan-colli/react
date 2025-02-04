const middlewareValidateInfo = (req, res, next) => {
  const { email, username, password } = req.body;

  function validEmail(userEmail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(userEmail);
  }

  if (req.path === "/register") {
    if (![email, username, password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid Email");
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid Email");
    }
  }

  next();
};

export default middlewareValidateInfo;
