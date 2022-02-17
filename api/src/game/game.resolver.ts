import { Query, Resolver } from '@nestjs/graphql';
import { GameService } from './game.service';
import {GameType} from './game.dto'

@Resolver()
export class GameResolver {
    constructor(private readonly gameService: GameService) {}

    @Query(returns => [GameType])
    async game() {
        return this.gameService.findAll();
    }
}
