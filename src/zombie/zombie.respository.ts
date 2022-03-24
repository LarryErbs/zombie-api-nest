import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ZombieEntity } from './entities/zombie.entity';

@Injectable()
export class ZombieRepository {
  constructor(
    @InjectRepository(ZombieEntity)
    private zombieRepository: Repository<ZombieEntity>,
  ) {}
}
