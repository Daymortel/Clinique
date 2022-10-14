import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { Specialty } from 'src/entities/specialty.entity';

@Injectable()
export class SpecialtiesService {
  constructor(
    @InjectRepository(Specialty) private readonly specialty : Repository<Specialty>
  ) {}

  create(createSpecialtyDto: CreateSpecialtyDto) {
    const specialty = this.specialty.create(createSpecialtyDto)
    // return 'This action adds a new specialty';
    return this.specialty.save(specialty)
  }

  findAll() {
    // return `This action returns all specialties`;
    return this.specialty.find()
  }

  findOne(id: number) {
    // return `This action returns a #${id} specialty`;
    return this.specialty.find({
      where: { id }
    })
  }

  update(id: number, updateSpecialtyDto: UpdateSpecialtyDto) {
    const specialty = this.specialty.create(updateSpecialtyDto)
    // return `This action updates a #${id} specialty`;
    return this.specialty.update({ id }, { ...updateSpecialtyDto })
  }

  remove(id: number) {
    // return `This action removes a #${id} specialty`;
    return this.specialty.delete({ id })
  }
}
