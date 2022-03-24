import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './entities/item.entity';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  controllers: [ItemController],
  providers: [ItemService],
  // exports: [ItemEntity],
  imports: [ItemEntity, TypeOrmModule.forFeature([ItemEntity])],
})
export class ItemModule {}
