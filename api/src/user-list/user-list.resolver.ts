import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserListService } from './user-list.service';
import { UserListType } from './user-list.dto';

@Resolver()
export class UserListResolver {
    constructor(private readonly userListService: UserListService) { }

    @Query(() => [UserListType])
    async userList() {
        return this.userListService.getFullList();
    }

    @Query(() => UserListType)
    async getListEntry(@Args('link') link: string) {
        return this.userListService.getListEntry(link);
    }

    @Mutation(() => UserListType)
    async addListEntry(@Args('input') input: UserListType) {
        return this.userListService.addListEntry(input);
    }

    @Mutation(() => UserListType)
    async updateListEntry(@Args('id') id: string, @Args('input') input: UserListType) {
        return this.userListService.updateListEntry(id, input);
    }

    @Mutation(() => UserListType)
    async deleteListEntry(@Args('id') id: string) {
        return this.userListService.deleteListEntry(id);
    }
}