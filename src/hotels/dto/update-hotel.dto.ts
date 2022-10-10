import {
  IsEnum,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  Max,
  Min,
} from 'class-validator';
import { HotelStatus } from '../models/hotel.enum';

export class UpdateHotelDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  contact: number;

  @IsOptional()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  star: number;

  @IsOptional()
  @IsEnum(HotelStatus)
  status: HotelStatus;

  @IsOptional()
  @IsNotEmpty()
  description: string;
}
