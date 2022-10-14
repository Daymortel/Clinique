import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from 'src/entities/type.entity';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type) private readonly type : Repository<Type>
  ) {}

  create(createTypeDto: CreateTypeDto) {
    const type = this.type.create(createTypeDto)
    // return 'This action adds a new type';
    return this.type.save(type)
  }

  findAll() {
    // return `This action returns all types`;
    return this.type.find()
  }

  findOne(id: number) {
    // return `This action returns a #${id} type`;
    return this.type.find({
      where: { id }
    })
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    const type = this.type.create(updateTypeDto)
    // return `This action updates a #${id} type`;
    return this.type.update({ id }, { ...updateTypeDto })
  }

  remove(id: number) {
    // return `This action removes a #${id} type`;
    return this.type.delete({ id })
  }
}
