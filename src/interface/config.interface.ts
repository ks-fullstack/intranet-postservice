import { ConnectOptions } from "mongoose";

export interface IDBSettings extends ConnectOptions {
  connectTimeoutMS: number;
  socketTimeoutMS: number;
  heartbeatFrequencyMS: number;
  retryWrites: boolean;
  ssl: boolean;
  appname: string;
  replicaSet: string;
}

export interface ISecuritySettings {
  allowedOrigin: string;
  allowedMethod: string;
  allowHeaders: string;
  allowCredentials: boolean;
}

export interface IConfig {
  apiBasePath: string;
  dbConnectionStr: string;
  dbName: string;
  dbUsername: string;
  dbPassword: string;
  dbSettings: IDBSettings;
  disableLogs: boolean;
  securitySettings: ISecuritySettings;
  serviceName: string;
}
