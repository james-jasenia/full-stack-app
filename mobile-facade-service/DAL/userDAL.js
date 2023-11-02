// MOCK
const users = [
  { id: 1, username: "user1", firstName: "John", lastName: "Doe", email: "user1@example.com" },
  { id: 2, username: "user2", firstName: "Jane", lastName: "Doe", email: "user2@example.com" },
];

function getUserById(id) {
  return users.find((user) => user.id === id);
}

module.exports = {
  getUserById
};
