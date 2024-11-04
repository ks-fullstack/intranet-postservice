import http, { Server } from "http";
import { agent as request } from "supertest";
import MongoConnection from "../db/mongo-connection";
import APIConfig from "../utils/config";
import ExpressApp from "../utils/expressApp";
import LikeTestCase from "./test_case/like.spec";
import PostTestCase from "./test_case/post.spec";

// Set up the chai Http assertion library
const apiBasePath = APIConfig.config.apiBasePath;
const agent = request(ExpressApp.app);

describe(`User Post Micro Service`, () => {
  let server: Server;

  before(async () => {
    await ExpressApp.connectApp();
    server = http.createServer(ExpressApp.app);
    await server.listen();
  });

  after(async () => {
    await MongoConnection.disconnectDB();
    await server.close();
  });

  describe("Executing test case", () => {
    const postTestCase = new PostTestCase(agent, apiBasePath + "/post");
    postTestCase.executeTestCase();

    const likeTestCase = new LikeTestCase(agent, apiBasePath + "/likes");
    likeTestCase.executeTestCase();
  });
});
