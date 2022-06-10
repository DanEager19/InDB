import { ObjectType, Field, InputType } from "@nestjs/graphql";

@ObjectType('Information')
@InputType('InformationInput')
class Information {
    @Field()
    dev: string

    @Field()
    pub: string

    @Field()
    date: string

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

    @Field({nullable: true})
    requirements: Requirements;
}