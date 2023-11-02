const userDAL = require("../DAL/userDAL");

function getUserById(id) {
  return userDAL.getUserById(id);
}

module.exports = {
    getUserById,
};
