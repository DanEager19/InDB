import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class List {
    title: string
    score: number
    status: "Playing" | "Finished" | "Dropped" | "Backlogged" | "Wishlisted"
}

@Schema()
export class User {
    @Prop()
    username: string;
    
    @Prop()
    password: string;
    
    @Prop()
    list: [List];

}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);