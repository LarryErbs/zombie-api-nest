import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZombieModule } from './zombie/zombie.module';
import { DatabaseModule } from './db/database.module';
import { TypeOrmConfigService } from './db/database.provider';
import { ItemModule } from './items/item.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.dev.env' }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ZombieModule,
    ItemModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
