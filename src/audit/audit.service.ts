import { Request } from "express";
import IAudit from "./audit.interface";
import auditRepo from "./audit.repo";

class AuditService {
  public create(req: Request, serviceName: string) {
    if (process.env.TESTENV === "0") {
      const inputData: IAudit = {
        reqPayload : req.body,
        reqType : req.method,
        reqUrl : req.originalUrl,
        serviceName,
      };
      try {
        auditRepo.create(inputData);
      } catch (err) {
        throw new Error((err as Error).message);
      }
    }
  }
}

export default new AuditService();
