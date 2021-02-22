// Write your tests here

const request = require("supertest");
const server = require("./server.js");
const db = require("../data/dbConfig");

test("sanity", () => {
  expect(true).toBe(true);
});

describe("Post to /register tests", () => {
  test("waits until I'm ready", () => {
    expect(true).toBe(true);
  });
});
