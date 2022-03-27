import { ItemEntity } from '../entities/item.entity';

export const hasMoreThatFiveItems = (items: ItemEntity[]) => items.length > 5;
