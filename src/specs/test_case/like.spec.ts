import { expect } from "chai";

class LikeTestCase {
  private agent: any;
  private basePath: string;

  constructor(agent: any, basePath: string) {
    this.agent = agent;
    this.basePath = basePath;
  }

  public executeTestCase() {
    describe("Execute Like Testcase", () => {
      it("should Get all like\"s list", async () => {
        const res = await this.agent.get(this.basePath + "/get/list");
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.own.property("success");
      });

      it("should Get count of all like\"s", async () => {
        const res = await this.agent.get(this.basePath + "/get/count");
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.own.property("success");
      });
    });
  }
}

export default LikeTestCase;
