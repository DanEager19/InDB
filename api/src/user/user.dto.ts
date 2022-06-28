import { ObjectType, Field, InputType } from "@nestjs/graphql";

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
    listKey: string;

    @Field({nullable: true})
    errors: string;
}