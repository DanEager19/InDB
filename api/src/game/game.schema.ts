import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Information {
    dev: string
    pub: string
    date: Date
    rating: 'E' | 'E10' | 'T' | 'M'
}

class Requirements {
    os: string
    cpu: string
    ram: string
    gpu: string
    storage: string
}

@Schema()
export class Game {
    @Prop()
    id: string;
    title: string;
    summary: string;
    
    @Prop()
    information: Information;

    @Prop()
    requirements: Requirements;
}

export type GameDocument = Game & Document;
export const GameSchema = SchemaFactory.createForClass(Game);