import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class List {
    title: string
    link: string
    score: number
    playtime: number
    status: 'Playing' | 'Finished' | 'Paused' | 'Stopped' | 'Wishlisted'
}

@Schema()
export class User {
    @Prop()
    _id: string;

    @Prop()
    username: string;

    @Prop()
    list: List;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);