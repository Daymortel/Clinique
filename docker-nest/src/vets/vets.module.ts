import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vet } from 'src/entities/vet.entity';
import { VetsService } from './vets.service';
import { VetsController } from './vets.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vet])],
  controllers: [VetsController],
  providers: [VetsService]
})
export class VetsModule {}
