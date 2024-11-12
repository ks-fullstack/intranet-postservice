import { NextFunction, Request, Response } from "express";
import postService from "../services/post.service";
import responseInterceptor from "../utils/response.interceptor";

class PostController {

  public getOne(req: Request, res: Response, next: NextFunction) {
    try {
      postService.getOne(req).then((result) => {
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
      postService.getAll(req).then((result) => {
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
      postService.getCount(req).then((result) => {
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
      postService.create(req).then((result) => {
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
      postService.update(req).then((result) => {
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
      postService.delete(req).then((result) => {
        responseInterceptor(res, result);
      }).catch((err) => {
        next(err);
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new PostController();
