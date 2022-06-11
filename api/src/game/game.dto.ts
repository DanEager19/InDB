import { ObjectType, Field, InputType } from "@nestjs/graphql";

@ObjectType('Information')
@InputType('InformationInput')
class Information {
    @Field()
    developer: string

    @Field()
    publisher: string

    @Field()
    date: string

    @Field()
    rating: 'E' | 'E10' | 'T' | 'M'

    @Field()
    series: string

    @Field()
    genres: string

    @Field()
    modes: string

    @Field()
    platforms: string
}

@ObjectType('GameType')
@InputType('GameInputType')
export class GameType {
    @Field({nullable: true})
    _id: string;

    @Field({nullable: true})
    title: string;

    @Field()
    link: string;

    @Field({nullable: true})
    summary: string;
    
    @Field({nullable: true})
    information: Information;
}