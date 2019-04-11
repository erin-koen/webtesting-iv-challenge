const request = require("supertest");
const server = require("./server.js");
const db = require("../data/dbConfig");

describe("server.js", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("GET /", () => {
    it("should respond with 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("should send back JSON", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });
  });

  describe("POST /", () => {
    it("should return a 201 status", async () => {
      const newUser = { username: "sjdfklds" };
      const res = await request(server)
        .post("/")
        .send(newUser);
      expect(res.status).toBe(201);
    });

    it("should insert the correct user", async () => {
      const newUser = { username: "sjdfklds" };
      const res = await request(server)
        .post("/")
        .send(newUser);

      expect(res.body.username).toEqual(newUser.username);
    });
  });
});
