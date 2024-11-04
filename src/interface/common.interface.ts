export interface IServiceResponse {
  data?: any;
  message: string;
  count?: number;
}

export interface IServiceResponseExtend extends IServiceResponse {
  success: boolean;
  statusCode: number;
}
