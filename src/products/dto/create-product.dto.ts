// DTO - DATA TRANSFER OBJECT

import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
