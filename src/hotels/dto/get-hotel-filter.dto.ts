import { IsEnum, IsIn, IsOptional } from 'class-validator';
import { HotelStatus } from '../models/hotel.enum';

export class GetHotelFilterDto {
  @IsOptional()
  @IsIn(['1', '2', '3', '4', '5'])
  star?: string;

  @IsOptional()
  @IsEnum(HotelStatus)
  status?: HotelStatus;

  @IsOptional()
  search?: string;
}
