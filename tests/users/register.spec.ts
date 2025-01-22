import request from "supertest";
import app from "../../src/app.ts";
describe("POST auth/register", () => {
    describe("Given all fields", () => {
        it("should return 201 status code", async () => {
            // AAA
            // Arrange
            const userData = {
                firstName: "John",
                lastName: "Doe",
                email: "john@gmail.com",
                password: "password",
            };
            // Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);
            // Assert
            expect(response.statusCode).toBe(201);
        });
        it("should be valid json response", async () => {
            // AAA
            // Arrange
            const userData = {
                firstName: "John",
                lastName: "Doe",
                email: "john@gmail.com",
                password: "password",
            };
            // Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);
            // Assert
            expect(
                (response.headers as Record<string, string>)["content-type"],
            ).toEqual(expect.stringContaining("json"));
        });
    });
    describe("Fields are missing", () => {});
});
