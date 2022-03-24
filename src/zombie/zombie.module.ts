import { Module } from '@nestjs/common';
import { ZombieService } from './zombie.service';
import { ZombieController } from './zombie.controller';
import { ZombieRepository } from './zombie.respository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZombieEntity } from './entities/zombie.entity';

@Module({
  controllers: [ZombieController],
  providers: [ZombieService, ZombieRepository],
  imports: [TypeOrmModule.forFeature([ZombieEntity])],
})
export class ZombieModule {}
