import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { Game, GameSchema } from './game.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }])],
  providers: [GameService, GameResolver]
})
export class GameModule {}
