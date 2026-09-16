const request = require("supertest");
const app = require("./server");

describe("Task API", () => {
  test("GET /api/health returns OK", async () => {
    const response = await request(app).get("/api/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
  });
});