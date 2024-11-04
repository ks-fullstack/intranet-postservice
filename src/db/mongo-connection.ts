import mongoose, { Connection } from "mongoose";
import { IDBSettings } from "../interface/config.interface";
import APIConfig from "../utils/config";

class MongoConnection {
  private static _instance: MongoConnection;
  private static _connect: Connection = mongoose.connection;
  private connectionStr: string;
  private options: IDBSettings;

  public static getInstance(): MongoConnection {
    if (!MongoConnection._instance) {
      MongoConnection._instance = new MongoConnection();
    }
    return MongoConnection._instance;
  }

  constructor() {
    const username = APIConfig.config.dbUsername;
    const password = APIConfig.config.dbPassword;
    const dbName = APIConfig.config.dbName;

    this.connectionStr = APIConfig.config.dbConnectionStr.replace("$username$", username)
        .replace("$password$", password).replace("$dbname$", dbName);
    console.log(this.connectionStr);
    this.options = APIConfig.config.dbSettings;

    MongoConnection._connect.on("connected", () => {
      console.log("MongoDb Connection Established");
    });

    MongoConnection._connect.on("reconnected", () => {
      console.log("MongoDB Connection Reestablished");
    });

    MongoConnection._connect.on("disconnected", () => {
      console.log("MongoDB Connection Disconnected");
    });

    MongoConnection._connect.on("close", () => {
      console.log("MongoDB Connection Closed");
    });

    MongoConnection._connect.on("error", (error) => {
      console.log("MongoDB Connection Error: ", error);
    });
  }
  
  public async connectDB() {
    await mongoose.connect(this.connectionStr, this.options);
  }

  public async disconnectDB() {
    await MongoConnection._connect.close();
  }
}

export default MongoConnection.getInstance();
