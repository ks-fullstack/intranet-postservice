import { PostType } from "../constants/app.enum";
import { IUser } from "./user.interface";

export interface IPost {
  title: string;
  description: string;
  keywords: string;
  postType: PostType;
  attachments: string[];
  isPostApproved: boolean;
  isActive: boolean;
  createdBy?: IUser;
  updatedBy?: IUser;
}

export interface IPostFilter {
  _id?: string;
  keywords?: string;
  postType?: PostType;
  isActive?: boolean;
  isPostApproved?: boolean;
  createdBy?: IUser;
  updatedBy?: IUser;
}

export interface IPostUpdate {
  title?: string;
  description?: string;
  keywords?: string;
  postType?: PostType;
  attachments?: string[];
  isPostApproved?: boolean;
  isActive?: boolean;
  updatedBy?: IUser;
}
