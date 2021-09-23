const express = require("express");
const serverRoutes = require("../routes/piCalc"); 
const request = require("supertest"); 
const app = express();
app.use("/pi", serverRoutes); //routes
describe("testing-server-routes", () => {
  it("GET /states - success", async () => {
    const { body } = await request(app).get("/pi/?random_limit=1"); 
    expect(body).toEqual(
      {
        PiCalc: "3",
      },
    );
  });
});

/*This test simulates a call to the API in the path "/pi/?random_limit=1", 
with random_limit = 1 to ensure that the value will be a single number for the test.*/