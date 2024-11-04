import { ILike, ILikeFilter, ILikeUpdate } from "../interface/like.interface";
import likeModel from "../models/like.model";

class LikeRepo {
  public getOne(id: string) {
    return likeModel.findOne({id});
  }

  public getAll(filter: string) {
    const filterExp = filter ? JSON.parse(filter) : {};
    return likeModel.find({filterExp});
  }

  public getCount(filter: string) {
    const filterExp = filter ? JSON.parse(filter) : {};
    return likeModel.find(filterExp).estimatedDocumentCount();
  }

  public create(inputData: ILike) {
    const saveData = new likeModel(inputData);
    return new Promise((resolve, reject) => {
      saveData.save().then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  public update(filterExp: ILikeFilter, inputData: ILikeUpdate) {
    return likeModel.findOneAndUpdate(filterExp, inputData, {new: true});
  }

  public delete(filterExp: ILikeFilter) {
    return likeModel.deleteMany(filterExp);
  }
}

export default new LikeRepo();
