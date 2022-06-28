import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserList {
    @Prop()
    title: string

    @Prop()
    link: string

    @Prop()
    score: number

    @Prop()
    playtime: number

    @Prop()
    status: 'Playing' | 'Finished' | 'Paused' | 'Stopped' | 'Wishlisted'
}

export type UserListDocument = UserList & Document;
export const UserListSchema = SchemaFactory.createForClass(UserList);

@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    password: string;

    //listKey is used to open the user's database
    @Prop()
    listKey: string;

    @Prop()
    errors: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);