import { ApiProperty } from '@nestjs/swagger';

export class CreateZombieDto {
  @ApiProperty()
  name: string;
}
