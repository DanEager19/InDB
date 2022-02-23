import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GameService } from './game.service';
import { GameType } from './game.dto';

@Resolver(of => GameType)
export class GameResolver {
    constructor(private readonly gameService: GameService) {}

    @Query(returns => [GameType])
        async game(): Promise<GameType[]> {
            return this.gameService.findAll();
        }
    @Query(returns => [GameType])
        async findGame(@Args('input') input: GameType) {
            return this.gameService.findOne(input);
        }
    @Mutation(returns => GameType)
        async createGame(@Args('input') input: GameType) {
            return this.gameService.create(input);
        }
    @Mutation(returns => GameType)
        async updateGame(@Args('id') id: string, @Args('input') input: GameType) {
            return this.gameService.update(id, input);
        }
    @Mutation(returns => GameType)
        async deleteGame(@Args('id') id: string) {
            return this.gameService.delete(id);
        }
}
