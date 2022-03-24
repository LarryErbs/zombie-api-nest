import { ApiProperty } from '@nestjs/swagger';

export class ItemDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  value?: number;
}
