import app from "./src/app.ts";
import { discountFunction } from "./src/utils.ts";
import request from "supertest";
describe.skip("discountFunction", () => {
    it("should return the correct discount", () => {
        const discount = discountFunction(100, 10);
        expect(discount).toEqual(10);
    });
    it("should return 200 status code", async () => {
        const response = await request(app).get("/").send();
        expect(response.status).toEqual(200);
    });
});
