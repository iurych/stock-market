import { Injectable } from '@nestjs/common';
import { CreateStockOutputDto } from './dto/create-stock-output.dto';
import { UpdateStockOutputDto } from './dto/update-stock-output.dto';

@Injectable()
export class StockOutputsService {
  create(createStockOutputDto: CreateStockOutputDto) {
    return 'This action adds a new stockOutput';
  }

  findAll() {
    return `This action returns all stockOutputs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockOutput`;
  }

  update(id: number, updateStockOutputDto: UpdateStockOutputDto) {
    return `This action updates a #${id} stockOutput`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockOutput`;
  }
}
