import { ObjectType, Field, InputType } from "@nestjs/graphql";

@ObjectType('Information')
@InputType('InformationInput')
class Information {
    @Field()
    dev: string

    @Field()
    pub: string

    @Field()
    date: Date

    @Field()
    rating: 'E' | 'E10' | 'T' | 'M'
}

@ObjectType('Requirements')
@InputType('RequirementsInput')
class Requirements {
    @Field()
    os: string

    @Field()
    cpu: string

    @Field()
    ram: string
    
    @Field()
    gpu: string

    @Field()
    storage: string
}

@ObjectType('GameType')
@InputType('GameInputType')
export class GameType {
    @Field()
    title: string;

    @Field()
    summary: string;
    
    @Field()
    information: Information;

    @Field()
    requirements: Requirements
}