import { ObjectType, Field, InputType } from "@nestjs/graphql";

@ObjectType('List')
@InputType('ListInput')
class Game {
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

@ObjectType('UserType')
@InputType('UserInputType')
export class UserType {
    @Field({nullable: true})
    _id: string;

    @Field()
    username: string;

    @Field()
    password: string;

    @Field({nullable: true})
    list: Game;

    @Field({nullable: true})
    errors: string;
}