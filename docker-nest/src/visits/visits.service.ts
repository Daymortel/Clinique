import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { Visit } from 'src/entities/visit.entity';

@Injectable()
export class VisitsService {
  constructor(
    @InjectRepository(Visit) private readonly visit : Repository<Visit>
  ) {}

  create(createVisitDto: CreateVisitDto) {
    const visit = this.visit.create(createVisitDto)
    // return 'This action adds a new visit';
    return this.visit.save(visit)
  }

  findAll() {
    // return `This action returns all visits`;
    return this.visit.find()
  }

  findOne(id: number) {
    // return `This action returns a #${id} visit`;
    return this.visit.find({
      where: { id }
    })
  }

  update(id: number, updateVisitDto: UpdateVisitDto) {
    const pet = this.visit.create(updateVisitDto)
    // return `This action updates a #${id} visit`;
    return this.visit.update({ id }, { ...updateVisitDto })
  }

  remove(id: number) {
    // return `This action removes a #${id} visit`;
    return this.visit.delete({ id })
  }
}
