import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class CreateHotelDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  contact: number;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  star: number;

  @IsNotEmpty()
  description: string;
}
