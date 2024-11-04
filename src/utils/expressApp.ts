import bodyParser from "body-parser";
import express, { Express } from "express";
import MongoConnection from "../db/mongo-connection";
import Routes from "../routers/router";
import APIConfig from "./config";
import errorHandler from "./error.handler";
import SecurityMiddleware from "./security";

class ExpressApp {
  private static instance: ExpressApp;
  public app: Express = express();

  public static getInstance(): ExpressApp {
    if (!ExpressApp.instance) {
      ExpressApp.instance = new ExpressApp();
    }
    return ExpressApp.instance;
  }

  public async connectApp() {
    // Connect Database
    await MongoConnection.connectDB();

    // Security middleware
    new SecurityMiddleware(this.app, APIConfig.config);

    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());

    // Routing
    const routes = new Routes(APIConfig.config.apiBasePath);
    routes.initializeRouting(this.app);

    // Global error handler
    this.app.use(errorHandler);
  }
}

export default ExpressApp.getInstance();
