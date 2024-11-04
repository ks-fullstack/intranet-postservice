import { Router } from "express";
import likeController from "../controllers/like.controller";

class LikeRoutes {
  public readonly router: Router = Router();

  constructor() {
    this.router.get("/get/list/:filter?", likeController.getAll);
    this.router.get("/get/count/:filter?", likeController.getCount);
    this.router.get("/get/:id", likeController.getOne);
    this.router.post("/create", likeController.create);
    this.router.put("/update", likeController.update);
    this.router.delete("/delete", likeController.delete);
  }
}

export default new LikeRoutes();
