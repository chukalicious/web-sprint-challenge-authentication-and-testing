module.exports = {
  isValid,
  nameAndPassword,
};

function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
}

function nameAndPassword(user) {
  return Boolean(user.username && user.password);
}
