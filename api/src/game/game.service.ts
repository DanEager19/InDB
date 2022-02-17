import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import {Game, GameDocument} from './game.schema'

@Injectable()
export class GameService {
    constructor(@InjectModel(Game.name) private gameModel: Model<GameDocument>) {}

    async findAll(): Promise<Game[]> {
        return this.gameModel.find().exec();
    }
}
