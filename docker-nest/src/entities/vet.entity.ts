import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Specialty } from './specialty.entity';

@Entity()
export class Vet {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @ManyToMany(() => Specialty)
    @JoinTable()
    specialties: Specialty
}
