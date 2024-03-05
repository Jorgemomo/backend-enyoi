const request = require("supertest");
const app = require("../app");

describe("Testing module /users", () => {
  test("Should respond user exist", async () => {
    const response = await request(app)
      .post("/api/v1/userslog/auth")
      .send({ email: "juanvas@gmail.com", password: "juanvas123" });
    expect(response.body.token).toBeDefined();
  });

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

  test("Should respond user create sucessfully", async () => {
    const response = await request(app).post("/api/v1/userslog/register").send({
      full_name: "Luis",
      phone: "321654987",
      address: "Calle falsa",
      email: "juanvas@gmail.com",
      password: "juanvas123",
      rol: "user",
    });
    expect(response.body.message).toBe("User created sucessfully");
  });
});
