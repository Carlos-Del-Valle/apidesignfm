import * as user from "../user";

describe("user handler", () => {
  //beforeAll
  it("should create a new user", async () => {
    const req = { body: { username: "hello", password: "hi" } };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };
    await user.createNewUser(req, res, () => {});
  });
  //   afterAll(async () => {
  //     //Cleanup code, Implement delete user here?

  //   });
});
