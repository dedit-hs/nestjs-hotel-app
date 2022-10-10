import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { GetHotelFilterDto } from './dto/get-hotel-filter.dto';
import { Hotel } from './entities/hotel.entity';
import { HotelStatus } from './models/hotel.enum';
import { HotelRepository } from './repositories/hotel.repository';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(HotelRepository)
    private hotelRepository: HotelRepository,
  ) {}

  create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    return this.hotelRepository.createHotel(createHotelDto);
  }

  getHotels(filterHotelDto: GetHotelFilterDto): Promise<Hotel[]> {
    return this.hotelRepository.getHotels(filterHotelDto);
  }

  async getHotelById(id: string): Promise<Hotel> {
    const found = await this.hotelRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!found) {
      throw new NotFoundException('Hotel not found');
    }

    return found;
  }

  // async update(id: string, updateHotelDto: UpdateHotelDto): Promise<Hotel> {
  //   await this.findOne(id);

  //   return this.hotelRepository.update(id, updateHotelDto);
  // }

  async update(
    id: string,
    name: string,
    contact: number,
    address: string,
    star: number,
    status: HotelStatus,
    description: string,
  ): Promise<Hotel> {
    const hotel = await this.getHotelById(id);

    if (name) {
      hotel.name = name;
    }

    if (contact) {
      hotel.contact = contact;
    }

    if (address) {
      hotel.address = address;
    }

    if (star) {
      hotel.star = star;
    }

    if (status) {
      hotel.status = status;
    }

    if (description) {
      hotel.description = description;
    }
    return this.hotelRepository.save(hotel);
  }

  async deleteHotel(id: string): Promise<void> {
    const deleted = await this.hotelRepository.delete(id);

    if (deleted.affected === 0) {
      throw new NotFoundException('Hotel not found.');
    }
  }
}
