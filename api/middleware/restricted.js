const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  // const token = req.headers?.authorization?.split(" ")[1];
  console.log(token);

  // try {
  //   // const token = req.headers.authorization;
  //   req.token = jwt.verify(token, secret.jwtSecret);
  //   console.log(req.token);
  //   next();
  // } catch (err) {
  //   res.status(401).json({ message: "token required" });
  // }

  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "token invalid" });
      } else {
        req.token = decodedToken;
        // req.authorization = token;
        next();
        console.log(decodedToken);
      }
    });
  } else {
    res.status(401).json({ message: "token required" });
  }

  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
