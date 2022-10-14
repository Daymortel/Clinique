import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'src/entities/type.entity';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}
