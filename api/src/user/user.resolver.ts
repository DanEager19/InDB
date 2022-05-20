import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './user.dto';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [UserType])
    async users() {
        return this.userService.findAll();
    }

    @Mutation(() => UserType)
    async createUser(@Args('input') input: UserType) {
        return this.userService.create(input);
    }
    
    @Mutation(() => UserType)
    async updateUser(@Args('id') id: string, @Args('input') input: UserType) {
        return this.userService.update(id, input);
    }

    @Mutation(() => UserType)
    async deleteUser(@Args('id') id: string) {
        return this.userService.delete(id);
    }
}

