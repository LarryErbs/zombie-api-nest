import { Module } from '@nestjs/common';
import { TypeOrmConfigService } from './database.provider';

@Module({
  providers: [TypeOrmConfigService],
  exports: [TypeOrmConfigService],
})
export class DatabaseModule {}
