import { Router } from "express";
import postController from "../controllers/post.controller";

class PostRoutes {
  public readonly router: Router = Router();

  constructor() {
    this.router.get("/get/count/:filter?", postController.getCount);
    this.router.get("/get/list/:filter?", postController.getAll);
    this.router.get("/get/:id", postController.getOne);
    this.router.post("/create", postController.create);
    this.router.put("/update", postController.update);
    this.router.delete("/delete", postController.delete);
  }
}

export default new PostRoutes();
