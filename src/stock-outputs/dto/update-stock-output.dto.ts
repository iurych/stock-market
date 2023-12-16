import { PartialType } from '@nestjs/mapped-types';
import { CreateStockOutputDto } from './create-stock-output.dto';

export class UpdateStockOutputDto extends PartialType(CreateStockOutputDto) {}
