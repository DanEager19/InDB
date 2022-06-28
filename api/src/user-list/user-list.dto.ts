import { ObjectType, Field, InputType } from "@nestjs/graphql";

@ObjectType('UserList')
@InputType('UserListInput')
export class UserListType {
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