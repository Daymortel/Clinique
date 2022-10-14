import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from './type.entity';
import { Owner } from './owner.entity';
import { Visit } from './visit.entity';

@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    birthdate: string

    @OneToOne(() => Type)
    @JoinColumn()
    type_id: Type[]

    @ManyToOne(() => Owner, (owner) => owner.pets)
    owner_id: Owner

    @OneToMany(() => Visit, (visit) => visit.pet_id)
    visits: Visit
}
