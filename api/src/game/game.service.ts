import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import {Game, GameDocument} from './game.schema'
import { GameType } from './game.dto';

@Injectable()
export class GameService {
    constructor(@InjectModel('Game') private gameModel: Model<Game>) {}

    async findAll(): Promise<GameType[]> {
        return this.gameModel.find().exec();
    }
    async create(createGameDto: GameType): Promise<Game> {
        const createdGame = new this.gameModel(createGameDto);
        return createdGame.save();
    }
    async update(id: string, updateGameDto: GameType): Promise<Game> {
        return this.gameModel.findByIdAndUpdate(id, updateGameDto);
    }
    async delete(id: string): Promise<Game> {
        return this.gameModel.findByIdAndDelete(id);
    }
    async findOne(input: GameType): Promise<Game[]> {
        return this.gameModel.find({input}).exec();
    }
}
