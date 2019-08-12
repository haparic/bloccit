const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

//#1
  describe("GET /marco", () => {

//#2
    it("should return status code 200 and return 'Polo' after 'Marco'", (done) => {

//#3
      request.get(base+'marco', (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Polo");
//#4
        done();
      });
    });

  });
});