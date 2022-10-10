import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateHotelDto } from '../dto/create-hotel.dto';
import { GetHotelFilterDto } from '../dto/get-hotel-filter.dto';
import { Hotel } from '../entities/hotel.entity';
import { HotelStatus } from '../models/hotel.enum';

@Injectable()
export class HotelRepository extends Repository<Hotel> {
  constructor(private dataSource: DataSource) {
    super(Hotel, dataSource.createEntityManager());
  }

  async createHotel(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const hotel = this.create({
      ...createHotelDto,
      status: HotelStatus.SWASTA,
    });

    await this.save(hotel);
    return hotel;
  }

  async getHotels(filterHotelDto: GetHotelFilterDto): Promise<Hotel[]> {
    const { star, status, search } = filterHotelDto;

    const query = this.createQueryBuilder('hotels');

    if (star) {
      query.andWhere('hotels.star = :star', { star });
    }

    if (status) {
      query.andWhere('hotels.status = :status', { status });
    }

    if (search) {
      query.andWhere('LOWER(hotels.name) LIKE LOWER(:search)', {
        search: `%${search}%`,
      });
    }

    const hotels = await query.getMany();

    return hotels;
  }
}
