import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Information {
    developer: string
    publisher: string
    date: string
    rating: 'E' | 'E10' | 'T' | 'M'
    series: string
    genres: string
    modes: string
    platforms: string
}

@Schema()
export class Game {
    @Prop()
    title: string;
    
    @Prop()
    link: string;

    @Prop()
    summary: string;
    
    @Prop()
    information: Information;
}

export type GameDocument = Game & Document;
export const GameSchema = SchemaFactory.createForClass(Game);