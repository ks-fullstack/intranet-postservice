import { IUser } from "./user.interface";

export interface ILike {
  postId: string;
  isLiked: boolean;
  createdBy?: IUser;
  updatedBy?: IUser;
}

export interface ILikeFilter {
  _id?: string;
  postId?: string;
  isLiked?: boolean;
  createdBy?: IUser;
  updatedBy?: IUser;
}

export interface ILikeUpdate {
  isLiked?: boolean;
  updatedBy?: IUser;
}
