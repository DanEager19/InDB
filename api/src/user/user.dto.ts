import { ObjectType, Field, InputType } from "@nestjs/graphql";

@ObjectType('List')
@InputType('ListInput')
class List {
    @Field()
    title: string;

    @Field()
    score: number;
    
    @Field()
    status: 'Playing' | 'Finished' | 'Paused' | 'Stopped' 
}

@ObjectType('UserType')
@InputType('UserInputType')
export class UserType {
    @Field({nullable: true})
    _id: string;

    @Field()
    username: string;

    @Field({nullable: true})
    list: List;
}