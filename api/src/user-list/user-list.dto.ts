import { ObjectType, Field, InputType } from "@nestjs/graphql";

@ObjectType('List')
@InputType('ListInput')
export class Game {
    @Field()
    title: string;

    @Field()
    link: string;

    @Field()
    score: number;
    
    @Field()
    playtime: number;

    @Field()
    status: 'Playing' | 'Finished' | 'Paused' | 'Stopped' | 'Wishlisted'
}