import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateResult, DeleteResult } from 'typeorm';
import { ItemDto } from './dtos/item-dto';
import { ItemEntity } from './entities/item.entity';
import { ItemService } from './item.service';

@Controller('item')
@ApiTags('Items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async create(@Body() itemDto: ItemDto): Promise<void> {
    await this.itemService.create(itemDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll(): Promise<ItemEntity[]> {
    return this.itemService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.itemService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() itemDto: ItemDto,
  ): Promise<UpdateResult> {
    return this.itemService.update(id, itemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.itemService.remove(+id);
  }
}
