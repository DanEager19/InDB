import { Resolver, Query } from '@nestjs/graphql';
import {UserService} from './user.service'; 
import { UserType } from './user.dto';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(returns => [UserType])
        async user() {
            return this.userService.findAll();
        }
}
