import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User, UserSchema } from './user.schema'
import { UserListModule } from 'src/user-list/user-list.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  UserListModule
],
  providers: [UserService, UserResolver]
})
export class UserModule {}
