import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVetDto } from './dto/create-vet.dto';
import { UpdateVetDto } from './dto/update-vet.dto';
import { Vet } from 'src/entities/vet.entity';

@Injectable()
export class VetsService {
  constructor(
    @InjectRepository(Vet) private readonly vet : Repository<Vet>
  ) {}

  create(createVetDto: CreateVetDto) {
    const vet = this.vet.create(createVetDto)
    // return 'This action adds a new vet';
    return this.vet.save(vet)
  }

  findAll() {
    // return `This action returns all vets`;
    return this.vet.find({
      relations: { specialties: true }
    })
  }

  findOne(id: number) {
    // return `This action returns a #${id} vet`;
    return this.vet.find({
      relations: { specialties: true },
      where: { id }
    })
  }

  update(id: number, updateVetDto: UpdateVetDto) {
    const vet = this.vet.create(updateVetDto)
    // return `This action updates a #${id} vet`;
    return this.vet.update({ id }, { ...updateVetDto })
  }

  remove(id: number) {
    // return `This action removes a #${id} vet`;
    return this.vet.delete({ id })
  }
}
