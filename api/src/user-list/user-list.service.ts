import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserList, UserListDocument } from './user-list.schema';
import { UserListType } from './user-list.dto';

@Injectable()
export class UserListService {
    constructor(@InjectModel(UserList.name) private userListModel: Model<UserListDocument>) {}

    async getFullList(): Promise<UserList[]> {
        return this.userListModel.find().exec();
    }

    async getListEntry(link: string): Promise<UserList> {
        return this.userListModel.findOne({link: link}).exec();
    }

    async addListEntry(createUserListDto: UserListType): Promise<UserList> {
        const createdUserList = new this.userListModel(createUserListDto);
        return createdUserList.save();
    }

    async updateListEntry(id: string, updateUserListDto: UserListType): Promise<UserList> {
        return this.userListModel.findByIdAndUpdate(id, updateUserListDto);
    }

    async deleteListEntry(id: string): Promise<UserList> {
        return this.userListModel.findByIdAndDelete(id);
    }
}