import { IPost, IPostFilter, IPostUpdate } from "../interface/post.interface";
import postModel from "../models/post.model";

class PostRepo {
  public getOne(id: string) {
    return postModel.findById({id});
  }

  public getAll(filter: string) {
    const filterExp = filter ? JSON.parse(filter) : {};
    return postModel.find(filterExp);
  }

  public getCount(filter: string) {
    const filterExp = filter ? JSON.parse(filter) : {};
    return postModel.find(filterExp).estimatedDocumentCount();
  }

  public create(inputData: IPost) {
    const saveData = new postModel(inputData);
    return new Promise((resolve, reject) => {
      saveData.save().then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  public update(filterExp: IPostFilter, inputData: IPostUpdate) {
    return postModel.findOneAndUpdate(filterExp, inputData, {new: true});
  }

  public delete(filterExp: IPostFilter) {
    return postModel.deleteMany(filterExp);
  }
}

export default new PostRepo();
