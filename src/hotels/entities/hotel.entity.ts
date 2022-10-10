import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { HotelStatus } from '../models/hotel.enum';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  contact: number;

  @Column()
  address: string;

  @Column()
  star: number;

  @Column()
  status: HotelStatus;

  @Column()
  description: string;
}
