import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GameService } from './game.service';
import { GameType } from './game.dto';

@Resolver()
export class GameResolver {
    constructor(private readonly gameService: GameService) {}

    @Query(() => [GameType])
    async games() {
        return this.gameService.findAll();
    }
    @Query(() => GameType)
    async findGame(@Args('id') id: string) {
        return this.gameService.findOne(id);
    }
    @Mutation(() => GameType)
    async createGame(@Args('input') input: GameType) {
        return this.gameService.create(input);
    }
    @Mutation(() => GameType)
    async updateGame(@Args('id') id: string, @Args('input') input: GameType) {
        return this.gameService.update(id, input);
    }
    @Mutation(() => GameType)
    async deleteGame(@Args('id') id: string) {
        return this.gameService.delete(id);
    }
}
