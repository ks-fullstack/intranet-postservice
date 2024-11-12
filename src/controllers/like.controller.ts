import { NextFunction, Request, Response } from "express";
import likeService from "../services/like.service";
import responseInterceptor from "../utils/response.interceptor";

class LikeController {

  public getOne(req: Request, res: Response, next: NextFunction) {
    try {
      likeService.getOne(req).then((result) => {
        responseInterceptor(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    try {
      likeService.getAll(req).then((result) => {
        responseInterceptor(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }

  public getCount(req: Request, res: Response, next: NextFunction) {
    try {
      likeService.getCount(req).then((result) => {
        responseInterceptor(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }

  public create(req: Request, res: Response, next: NextFunction) {
    try {
      likeService.create(req).then((result) => {
        responseInterceptor(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }

  public update(req: Request, res: Response, next: NextFunction) {
    try {
      likeService.update(req).then((result) => {
        responseInterceptor(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }

  public delete(req: Request, res: Response, next: NextFunction) {
    try {
      likeService.delete(req).then((result) => {
        responseInterceptor(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new LikeController();
