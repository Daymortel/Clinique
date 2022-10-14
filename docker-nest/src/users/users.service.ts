import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly user : Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.user.create(createUserDto)
    user.password = await bcrypt.hash(user.password, 10)
    // return 'This action adds a new user';
    return this.user.save(user)
  }

  findAll() {
    // return `This action returns all users`;
    // return this.user.find({
    //   relations: { own_id: true, pet_id: true }
    // })
    return `Veuillez Sélectionner un utilisateur.`;
  }

  findOne(id: number) {
    // return `This action returns a #${id} user`;
    return this.user.find({
      relations: { own_id: true },
      where: { id }
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.user.create(updateUserDto)
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10)
    }
    // return `This action updates a #${id} user`;
    return this.user.update({ id }, { ...updateUserDto })
  }

  remove(id: number) {
    // return `This action removes a #${id} user`;
    return this.user.delete({ id })
  }
}
