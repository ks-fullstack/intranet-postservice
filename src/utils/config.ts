import configJSON from "../../config.json";
import { IConfig } from "../interface/config.interface";

export class APIConfig {
  private static _instance: APIConfig = new APIConfig();
  public config: IConfig;

  constructor() {
    this.config = configJSON;
  }

  public static getInstance(): APIConfig {
    return APIConfig._instance;
  }
}

export default APIConfig.getInstance();
