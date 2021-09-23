const express = require("express"); 
const serverRoutes = require("../routes/index");
const request = require("supertest");
const app = express(); 
app.use("/", serverRoutes); //routes
describe("testing-server-routes", () => {
  it("GET /states - success", async () => {
    const { body } = await request(app).get("/"); 
    expect(body).toEqual(
        {
            "error": true,
            "code": 200,
            "message": "Starting point"
        }
    );
  });
});

//This test simulates an API call on the path "/" and the response is compared with what is expected.