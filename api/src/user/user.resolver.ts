import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './user.dto';
import { UserListService } from 'src/user-list/user-list.service';
import { UserListType } from 'src/user-list/user-list.dto';

@Resolver()
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly userListService: UserListService
    ) { }
    
    @Query(() => [UserType])
    async users() {
        return this.userService.findAll();
    }

    @Query(() => UserType)
    async login(@Args('username') username: string, @Args('password') password:string) {
        const user = this.userService.login(username);
        if (password === (await user).password) {
            return user;
        } else {
            (await user).username, (await user).password = '';
            (await user).errors = 'Password Incorrect';
            return user;
        }
    }

    @Mutation(() => UserType)
    async register(@Args('input') input: UserType) {
        return this.userService.register(input);
    }
    
    @Mutation(() => UserType)
    async updateUser(@Args('id') id: string, @Args('input') input: UserType) {
        return this.userService.update(id, input);
    }

    @Mutation(() => UserType)
    async deleteUser(@Args('id') id: string) {
        return this.userService.delete(id);
    }

    @Mutation(() => UserListType)
    async addListEntry(@Args('input') input: UserListType) {
        return this.userListService.addListEntry(input);
    }

}