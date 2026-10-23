
const request = require("supertest");
const app = require("../server");

describe("ShopEasy API tests", () => {
  test("Home page should return status 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Welcome to ShopEasy");
  });

  test("Health check should return UP", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });

  test("Products API should return three products", async () => {
    const response = await request(app).get("/products");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(3);
  });
});
