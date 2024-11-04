import { expect } from "chai";

class PostTestCase {
  private agent: any;
  private basePath: string;

  constructor(agent: any, basePath: string) {
    this.agent = agent;
    this.basePath = basePath;
  }

  public executeTestCase() {
    describe("Execute Post Testcase", () => {
      it("should Get all post\"s list", async () => {
        const res = await this.agent.get(this.basePath + "/get/list");
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.own.property("success");
      });

      it("should Get count of all post\"s", async () => {
        const res = await this.agent.get(this.basePath + "/get/count");
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.own.property("success");
      });
    });
  }
}

export default PostTestCase;
