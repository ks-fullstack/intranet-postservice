import { Request } from "express";
import AppConstant from "../constants/app.constant";
import { IServiceResponse } from "../interface/common.interface";
import { ILike, ILikeFilter, ILikeUpdate } from "../interface/like.interface";
import likeRepo from "../repos/like.repo";
import CustomError from "../utils/custom.error";

class LikeService {
  public async getOne(req: Request): Promise<IServiceResponse> {
    const recordId = req.params.id;
    const resObj = await likeRepo.getOne(recordId);
    const result: IServiceResponse = {
      count: 1,
      data: resObj,
      message: 1 + AppConstant.GetResponseMessage,
    };
    return result;
  }

  public async getAll(req: Request): Promise<IServiceResponse> {
    const filterExp = req.params.filter || "";
    const resObj = await likeRepo.getAll(filterExp);
    const result: IServiceResponse = {
      count: resObj.length,
      data: resObj,
      message: resObj.length + AppConstant.GetResponseMessage,
    };
    return result;
  }

  public async getCount(req: Request): Promise<IServiceResponse> {
    const filterExp = req.params.filter || "";
    const resObj = await likeRepo.getCount(filterExp);
    const result: IServiceResponse = {
      count: resObj,
      data: resObj,
      message: resObj + AppConstant.GetResponseMessage,
    };
    return result;
  }

  public async create(req: Request): Promise<IServiceResponse> {
    const data: ILike = req.body;
    if (Array.isArray(data)) {
      if (data.length === 0) {
        throw new CustomError("Empty payload", 422);
      }
    } else {
      if (!data || (data && Object.keys(data).length === 0)) {
        throw new CustomError("Empty payload", 422);
      }
    }

    const resObj = await likeRepo.create(data);
    const result: IServiceResponse = {
      count: Array.isArray(resObj) ? resObj.length : 1,
      data: resObj,
      message: AppConstant.GetResponseMessage,
    };
    return result;
  }

  public async update(req: Request): Promise<IServiceResponse> {
    const filterExp: ILikeFilter = req.body.filterExp || "";
    const requestedDataToUpdate: ILikeUpdate = req.body.data || "";
    if (!filterExp || (filterExp && Object.keys(filterExp).length === 0)) {
      throw new CustomError("Filter expression required", 422);
    } else if (!requestedDataToUpdate || (requestedDataToUpdate && Object.keys(requestedDataToUpdate).length === 0)) {
      throw new CustomError("Payload required to update data", 422);
    } else {
      const resObj = await likeRepo.update(filterExp, requestedDataToUpdate);
      let updatedRecordCount = 0;
      if (resObj) {
        updatedRecordCount = Array.isArray(resObj) ? resObj.length : 1;
      }
      const result: IServiceResponse = {
        count: updatedRecordCount,
        data: resObj,
        message: updatedRecordCount + AppConstant.UpdateResponeMessage,
      };
      return result;
    }
  }

  public async delete(req: Request): Promise<IServiceResponse> {
    const filterExp: ILikeFilter = req.body.filterExp || "";
    if (!filterExp || (filterExp && Object.keys(filterExp).length === 0)) {
      throw new CustomError("Filter expression required", 422);
    } else {
      const resObj = await likeRepo.delete(filterExp);
      const result: IServiceResponse = {
        count: resObj.deletedCount,
        message: resObj.deletedCount + AppConstant.DeleteResponeMessage,
      };
      return result;
    }
  }
}

export default new LikeService();
