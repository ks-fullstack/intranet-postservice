import configJSON from "../../config.json";
import { IConfig } from "../interface/config.interface";

class APIConfig {
  private static _instance: APIConfig;
  public config: IConfig;

  public static getInstance(): APIConfig {
    if (!APIConfig._instance) {
      APIConfig._instance = new APIConfig();
    }
    return APIConfig._instance;
  }

  constructor() {
    this.config = configJSON;
  }
}

export default APIConfig.getInstance();
