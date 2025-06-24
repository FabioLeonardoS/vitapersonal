const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).send({ message: "Token não fornecido" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Token inválido", error: err.message });
  }
};