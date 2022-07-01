import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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