const request = require("supertest");
const app = require("../app");

describe("Testing module /users", () => {
  test("Should respond list or array users method GET", async () => {
    const response = await request(app)
      .get("/api/v1/users")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW52YXNAZ21haWwuY29tIiwicGFzc3dvcmQiOiJqdWFudmFzMTIzIiwiaWF0IjoxNzA4ODc2Mzk1fQ.tFYbO9Pux-EJJizzVDgDzRF54J4v65-WA5U3ky4ydpA"
      )
      .send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
