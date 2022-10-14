import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from './pet.entity';

@Entity()
export class Owner {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    address: string

    @Column()
    city: string

    @Column()
    telephone: string

    @OneToMany(() => Pet, (pet) => pet.owner_id)
    pets: Pet[]
}
