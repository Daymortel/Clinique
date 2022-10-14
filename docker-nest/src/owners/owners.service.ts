import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from 'src/entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private readonly owner : Repository<Owner>
  ) {}

  create(createOwnerDto: CreateOwnerDto) {
    const owner = this.owner.create(createOwnerDto)
    // return 'This action adds a new owner';
    return this.owner.save(owner)
  }

  findAll() {
    // return `This action returns all owners`;
    return this.owner.find({
      relations: { pets: true }
    })
  }

  findOne(id: number) {
    // return `This action returns a #${id} owner`;
    return this.owner.find({
      relations: { pets: true },
      where: { id }
    })
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    const owner = this.owner.create(updateOwnerDto)
    // return `This action updates a #${id} owner`;
    return this.owner.update({ id }, { ...updateOwnerDto })
  }

  remove(id: number) {
    // return `This action removes a #${id} owner`;
    return this.owner.delete({ id })
  }
}
