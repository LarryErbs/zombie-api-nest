import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateZombieDto } from './dto/create-zombie.dto';
import { UpdateZombieDto } from './dto/update-zombie.dto';
import { ZombieEntity } from './entities/zombie.entity';

@Injectable()
export class ZombieService {
  constructor(
    @InjectRepository(ZombieEntity)
    private zombieRepository: Repository<ZombieEntity>,
  ) {}

  async create({ name }: CreateZombieDto): Promise<ZombieEntity> {
    const zombie = this.zombieRepository.create();
    zombie.name = name;

    await this.zombieRepository.save(zombie);
    return zombie;
  }

  findAll(): Promise<ZombieEntity[]> {
    return this.zombieRepository.find();
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
}
