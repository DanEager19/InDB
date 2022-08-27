import { Module } from '@nestjs/common';
import { UserList, UserListSchema } from './user-list.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserListService } from './user-list.service';
import { UserListResolver } from './user-list.resolver';

@Module({ 
    imports: [MongooseModule.forFeature([{ name: UserList.name, schema: UserListSchema }])],
    providers: [UserListService, UserListResolver]
})
export class UserListModule {}
