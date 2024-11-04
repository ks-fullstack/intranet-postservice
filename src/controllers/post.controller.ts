import { NextFunction, Request, Response } from "express";
import auditService from "../audit/audit.service";
import postService from "../services/post.service";
import APIConfig from "../utils/config";
import responseHandler from "../utils/response.handler";

const serviceName = APIConfig.config.serviceName;

class PostController {

  public getOne(req: Request, res: Response, next: NextFunction) {
    try {
      auditService.create(req, serviceName);
      postService.getOne(req).then((result) => {
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
      auditService.create(req, serviceName);
      postService.getAll(req).then((result) => {
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
      auditService.create(req, serviceName);
      postService.getCount(req).then((result) => {
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
      auditService.create(req, serviceName);
      postService.create(req).then((result) => {
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
      auditService.create(req, serviceName);
      postService.update(req).then((result) => {
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
      auditService.create(req, serviceName);
      postService.delete(req).then((result) => {
        responseHandler(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new PostController();
