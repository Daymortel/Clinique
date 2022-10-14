import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from './pet.entity';

@Entity()
export class Visit {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Pet, (pet) => pet.visits)
    pet_id: Pet

    @Column()
    visit_date: string

    @Column()
    description: string
}
