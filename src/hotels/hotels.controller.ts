import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { GetHotelFilterDto } from './dto/get-hotel-filter.dto';
import { Hotel } from './entities/hotel.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('hotels')
@UseGuards(AuthGuard())
export class HotelsController {
  constructor(private hotelsService: HotelsService) {}

  @Post()
  create(@Body() createHotelDto: CreateHotelDto): Promise<Hotel> {
    return this.hotelsService.create(createHotelDto);
  }

  @Get()
  getHotels(@Query() filterDto: GetHotelFilterDto): Promise<Hotel[]> {
    return this.hotelsService.getHotels(filterDto);
  }

  @Get('/:id')
  getHotelById(@Param('id') id: string): Promise<Hotel> {
    return this.hotelsService.getHotelById(id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    const { name, contact, address, star, status, description } =
      updateHotelDto;
    return this.hotelsService.update(
      id,
      name,
      contact,
      address,
      star,
      status,
      description,
    );
  }

  @Delete('/:id')
  deleteHotel(@Param('id') id: string): Promise<void> {
    return this.hotelsService.deleteHotel(id);
  }
}
