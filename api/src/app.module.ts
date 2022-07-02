import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { GameModule } from './game/game.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { UserListModule } from './user-list/user-list.module';
import { user, password } from '../cred.json';

@Module({
  imports: [
    GameModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    }),

    MongooseModule.forRoot(`mongodb+srv://${user}:${password}@cluster0.xcoys.mongodb.net/index?retryWrites=true&w=majority`),

    UserListModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
