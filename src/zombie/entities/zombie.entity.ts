import { ItemEntity } from 'src/items/entities/item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { IZombie } from '../interfaces/zombie.interface';

@Entity('zombie')
export class ZombieEntity implements IZombie {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  creationDate: string;

  @ManyToMany(() => ItemEntity, (item) => item.zombies, { nullable: true })
  @JoinTable()
  items: ItemEntity[];
}
