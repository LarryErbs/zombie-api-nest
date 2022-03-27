import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from 'src/items/entities/item.entity';
import { hasMoreThatFiveItems } from 'src/items/helpers/item-helper';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateZombieDto } from './dto/create-zombie.dto';
import { UpdateZombieDto } from './dto/update-zombie.dto';
import { ZombieEntity } from './entities/zombie.entity';

@Injectable()
export class ZombieService {
  constructor(
    @InjectRepository(ZombieEntity)
    private readonly zombieRepository: Repository<ZombieEntity>,
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>,
  ) {}

  async create({ name }: CreateZombieDto): Promise<ZombieEntity> {
    const zombie = this.zombieRepository.create();
    zombie.name = name;

    await this.zombieRepository.save(zombie);
    return zombie;
  }

  findAll(): Promise<ZombieEntity[]> {
    return this.zombieRepository
      .createQueryBuilder('zombie')
      .leftJoinAndSelect('zombie.items', 'items')
      .getMany();
  }

  findOne(zombieId: number): Promise<ZombieEntity> {
    return this.zombieRepository.findOneBy({ id: zombieId });
  }

  update(id: number, updateZombieDto: UpdateZombieDto): Promise<UpdateResult> {
    return this.zombieRepository.update({ id: id }, updateZombieDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.zombieRepository.delete({ id: id });
  }

  async addItem(zombieId: number, itemName: string): Promise<void> {
    const zombie = await this.zombieRepository
      .createQueryBuilder('zombie')
      .where('zombie.id = :id', { id: zombieId })
      .leftJoinAndSelect('zombie.items', 'items')
      .getOne();
    if (!zombie) throw new NotFoundException('Zombie not found');

    const item = await this.itemRepository.findOneBy({
      name: itemName,
    });
    zombie.items = [...(zombie.items || []), item];
    if (hasMoreThatFiveItems(zombie.items)) {
      throw new InternalServerErrorException(
        'Zombie cannot have more than 5 items',
      );
    }

    await this.zombieRepository.save(zombie);
  }
}
