// Write your tests here

const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");

test("sanity", () => {
  expect(true).toBe(true);
});

describe("Post to /register tests", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  test("sends username and password for a new user to the server", async () => {
    await request(server)
      .post("/api/auth/register")
      .send({ password: "password", username: "kat" });
    const [user] = await db("users");
    expect(user.username).toBe("kat");
  });
  test("gives me correct code", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ password: "password", username: "kat" });
    expect(res.status).toBe(201);
  });
});

describe("Post to the /login tests", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  test("returns code", async () => {
    const code = await request(server)
      .post("/api/auth/login")
      .send({ username: "Kat", password: "password" });
    expect(code.status).toBe(401);
  });
});
