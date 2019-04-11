const request = require("supertest");
const server = require("./server.js");
const db = require('../data/dbConfig')

describe("server.js", () => {
    beforeEach(async () => {
        await db('users').truncate()
    });
  describe("GET /", () => {
    it("should respond with 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should send back JSON", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });
  });

  describe("POST /", () => {
    it("should respond with 200 OK", () => {});

    it("should insert the correct user ", () => {});
  });

  describe("DELETE /:id", () => {
    it("should respond with 204", () => {});

    it("", () => {});
  });
});
