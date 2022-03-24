import { ModelEntity } from '../../common/serializers/model.serializer';
import { IZombie } from '../interfaces/zombie.interface';

export class ZombieEntity extends ModelEntity implements IZombie {
  id: number;
  name: string;
  creationDate: string;
}
