import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from 'src/entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly pet : Repository<Pet>
  ) {}

  create(createPetDto: CreatePetDto) {
    const pet = this.pet.create(createPetDto)
    // return 'This action adds a new pet';
    return this.pet.save(pet)
  }

  findAll() {
    // return `This action returns all pets`;
    return this.pet.find({
      relations: { type_id: true, visits: true }
    })
  }

  findOne(id: number) {
    // return `This action returns a #${id} pet`;
    return this.pet.find({
      relations: { type_id: true, visits: true },
      where: { id }
    })
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    const pet = this.pet.create(updatePetDto)
    // return `This action updates a #${id} pet`;
    return this.pet.update({ id }, { ...updatePetDto })
  }

  remove(id: number) {
    // return `This action removes a #${id} pet`;
    return this.pet.delete({ id })
  }
}
