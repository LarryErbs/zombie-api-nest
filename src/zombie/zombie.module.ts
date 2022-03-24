import { Module } from '@nestjs/common';
import { ZombieService } from './zombie.service';
import { ZombieController } from './zombie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZombieEntity } from './entities/zombie.entity';
import { ItemEntity } from 'src/items/entities/item.entity';

@Module({
  controllers: [ZombieController],
  providers: [ZombieService],
  imports: [
    ItemEntity,
    TypeOrmModule.forFeature([ZombieEntity]),
    TypeOrmModule.forFeature([ItemEntity]),
  ],
})
export class ZombieModule {}
