function getFullName(user) {
  if (user.firstName && user.lastName) {
    return `${user.firstName} ${user.lastName}`;
  } else {
    return "";
  }
}

module.exports = {
  getFullName,
};
