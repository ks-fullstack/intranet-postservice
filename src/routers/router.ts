import { Express } from "express";
import { IRoutes } from "../interface/router.interface";
import likeRoutes from "./like.router";
import postRoutes from "./post.router";

class MainRoute {
  public apiRoutes: IRoutes[];

  constructor(apiBasePath: string) {
    this.apiRoutes = [
      {
        path: apiBasePath + "/post",
        router: postRoutes.router,
      },
      {
        path: apiBasePath + "/likes",
        router: likeRoutes.router,
      },
    ];
  }

  public initializeRouting(app: Express) {
    this.apiRoutes.forEach((routeObj: IRoutes) => {
      app.use(routeObj.path, routeObj.router);
    });
  }
}

export default MainRoute;
