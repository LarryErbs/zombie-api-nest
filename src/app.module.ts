import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZombieModule } from './zombie/zombie.module';
import { DatabaseModule } from './postgres/database.module';
import { TypeOrmConfigService } from './postgres/database.provider';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.dev.env' }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ZombieModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
