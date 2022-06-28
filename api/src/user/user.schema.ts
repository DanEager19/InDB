import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Game {
    title: string
    link: string
    score: number
    playtime: number
    status: 'Playing' | 'Finished' | 'Paused' | 'Stopped' | 'Wishlisted'
}

@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    password: string;

    @Prop()
    list: Game;

    @Prop()
    errors: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);