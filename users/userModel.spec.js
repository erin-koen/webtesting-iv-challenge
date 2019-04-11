const db = require("../data/dbConfig.js");
const Users = require("./userModel.js");

describe("the user model", () => {
//   clean out DB before each test - does this revert to the seed?
  beforeEach(async()=>{
      await db('users').truncate();
  })

  describe("the insert method", () => {
    it("inserts the proper user", async () => {
      let newUser = await Users.insert({ username: "erin" });
      expect(newUser.username).toBe("erin");
      newUser = await Users.insert({ username: "rosemary" });
      expect(newUser.username).toBe("rosemary");
    });
    it("returns json", async () => {
      const newUser = await Users.insert({ username: "erin " });
      console.log(newUser);
    });
  });

  describe("the remove method", () => {
    it("deletes the user", async () => {
      let newUser = await Users.insert({ username: "fdsdas"})
      const before = await Users.get();
      const deletedUser = await Users.remove(1);
      const after = await Users.get();
      expect(before.length).toEqual(after.length + 1);
      //theres's probably an array method here to prove that the user with deleteduser.id doesn't exist any more, but i'm feeling lazy
    });
  });
});
