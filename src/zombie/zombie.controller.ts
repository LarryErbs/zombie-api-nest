import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZombieService } from './zombie.service';
import { CreateZombieDto } from './dto/create-zombie.dto';
import { UpdateZombieDto } from './dto/update-zombie.dto';

@Controller('zombie')
export class ZombieController {
  constructor(private readonly zombieService: ZombieService) {}

  @Post()
  create(@Body() createZombieDto: CreateZombieDto) {
    return this.zombieService.create(createZombieDto);
  }

  @Get()
  findAll() {
    return this.zombieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zombieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZombieDto: UpdateZombieDto) {
    return this.zombieService.update(+id, updateZombieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zombieService.remove(+id);
  }
}
