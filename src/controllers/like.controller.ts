import { NextFunction, Request, Response } from "express";
import auditService from "../audit/audit.service";
import likeService from "../services/like.service";
import APIConfig from "../utils/config";
import responseHandler from "../utils/response.handler";

const serviceName = APIConfig.config.serviceName;

class LikeController {

  public getOne(req: Request, res: Response, next: NextFunction) {
    try {
      auditService.create(req, serviceName, APIConfig.config.disableLogs);
      likeService.getOne(req).then((result) => {
        responseHandler(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    try {
      auditService.create(req, serviceName, APIConfig.config.disableLogs);
      likeService.getAll(req).then((result) => {
        responseHandler(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }

  public getCount(req: Request, res: Response, next: NextFunction) {
    try {
      auditService.create(req, serviceName, APIConfig.config.disableLogs);
      likeService.getCount(req).then((result) => {
        responseHandler(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }

  public create(req: Request, res: Response, next: NextFunction) {
    try {
      auditService.create(req, serviceName, APIConfig.config.disableLogs);
      likeService.create(req).then((result) => {
        responseHandler(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }

  public update(req: Request, res: Response, next: NextFunction) {
    try {
      auditService.create(req, serviceName, APIConfig.config.disableLogs);
      likeService.update(req).then((result) => {
        responseHandler(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }

  public delete(req: Request, res: Response, next: NextFunction) {
    try {
      auditService.create(req, serviceName, APIConfig.config.disableLogs);
      likeService.delete(req).then((result) => {
        responseHandler(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new LikeController();
