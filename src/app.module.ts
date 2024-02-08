import { Module } from '@nestjs/common';
import { DiscordModule } from './discord/discord.module';
import * as process from 'process';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DiscordModule,
    // Comment from here
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      username: process.env.PG_USER,
      password: process.env.PG_PASS,
      database: process.env.PG_DATABASE,
      ssl: true,
      autoLoadEntities: true,
      synchronize: true,
    }),
    // to here to make command working
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
