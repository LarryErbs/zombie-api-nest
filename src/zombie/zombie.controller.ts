import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ZombieService } from './zombie.service';
import { CreateZombieDto } from './dto/create-zombie.dto';
import { UpdateZombieDto } from './dto/update-zombie.dto';
import { ZombieEntity } from './entities/zombie.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { ItemDto } from 'src/items/dtos/item-dto';

@Controller('zombie')
@ApiTags('Zombies')
export class ZombieController {
  constructor(private readonly zombieService: ZombieService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async create(@Body() createZombieDto: CreateZombieDto): Promise<void> {
    await this.zombieService.create(createZombieDto);
  }

  @Post(':id/item')
  async addItem(
    @Param('id') id: number,
    @Body() { name }: ItemDto,
  ): Promise<void> {
    await this.zombieService.addItem(id, name);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll(): Promise<ZombieEntity[]> {
    return this.zombieService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.zombieService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateZombieDto: UpdateZombieDto,
  ): Promise<UpdateResult> {
    return this.zombieService.update(id, updateZombieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.zombieService.remove(+id);
  }
}
