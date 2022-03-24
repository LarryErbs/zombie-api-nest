import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ItemDto } from './dtos/item-dto';
import { ItemEntity } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>,
  ) {}

  async create({ name, value }: ItemDto): Promise<ItemEntity> {
    const zombie = this.itemRepository.create();
    zombie.name = name;
    zombie.value = value;

    await this.itemRepository.save(zombie);
    return zombie;
  }

  findAll(): Promise<ItemEntity[]> {
    return this.itemRepository.find();
  }

  findOne(zombieId: number): Promise<ItemEntity> {
    return this.itemRepository.findOneBy({ id: zombieId });
  }

  update(id: number, updateZombieDto: ItemDto): Promise<UpdateResult> {
    return this.itemRepository.update({ id: id }, updateZombieDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.itemRepository.delete({ id: id });
  }
}
