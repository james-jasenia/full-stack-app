const chai = require("chai");
const expect = chai.expect;
const userMap = require("../mappers/userMap");

describe("userMap", () => {
  it("should concatenate the first and last name of a user", () => {
    const user = {
      firstName: "John",
      lastName: "Doe",
    };

    const fullName = userMap.getFullName(user);

    expect(fullName).to.equal(`${user.firstName} ${user.lastName}`);
  });
});
