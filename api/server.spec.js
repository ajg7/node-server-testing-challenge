const supertest = require("supertest");
const server = require("./server");

describe("server", () => {
    describe("GET", () => {
        it("should return 200", () => {
            return supertest(server).get("/").then(response => {expect(response.status).toBe(200)})
        })
        it("should have body 'It's alive!!!'", () => {
            return supertest(server).get("/").then(response => {expect(response.body).toEqual({Frankenstein: "It's alive!!!!!!"})})
        })
    })
    describe("nintendo endpoint", () => {
        it("should return character json", () => {
            return supertest(server).get("/api/nintendo/").then(response => {expect(response.body).toBe(200)}))
        })
    })
})