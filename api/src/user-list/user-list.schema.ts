import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class UserList {
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