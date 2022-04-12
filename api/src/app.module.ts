import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { GameModule } from './game/game.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';

const auth = require('../cred.json'); 

@Module({
  imports: [
    GameModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    }),

    MongooseModule.forRoot(`mongodb+srv://${auth.user}:${auth.password}@cluster0.xcoys.mongodb.net/games?retryWrites=true&w=majority`),

    UserModule,
    ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
