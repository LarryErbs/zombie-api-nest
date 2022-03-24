import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { IZombie } from '../interfaces/zombie.interface';

@Entity('zombie')
export class ZombieEntity implements IZombie {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  creationDate: string;
}
