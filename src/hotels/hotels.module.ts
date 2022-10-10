import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { HotelRepository } from './repositories/hotel.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel]), AuthModule],
  controllers: [HotelsController],
  providers: [HotelsService, HotelRepository],
})
export class HotelsModule {}
