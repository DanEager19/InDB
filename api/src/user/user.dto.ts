import { ObjectType, Field, InputType } from "@nestjs/graphql";

@ObjectType('List')
@InputType('ListInput')
class List {
    @Field()
    title: string

    @Field()
    score: number

    @Field()
    status: "Playing" | "Finished" | "Dropped" | "Backlogged" | "Wishlisted"
}

@ObjectType('UserType')
@InputType('UserInputType')
export class UserType {
    @Field()
    username: string;

    @Field()
    password: string;
    
    @Field()
    list: List;
}