import { ZombieEntity } from 'src/zombie/entities/zombie.entity';
import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class ItemEntity {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  name: string;

  @Column()
  value: number;

  @ManyToMany(() => ZombieEntity, (zombie) => zombie.items, { nullable: true })
  zombies: ZombieEntity[];
}
