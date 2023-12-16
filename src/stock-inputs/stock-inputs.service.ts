import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/errors';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStockInputDto } from './dto/create-stock-input.dto';

@Injectable()
export class StockInputsService {
  constructor(private prismaService: PrismaService) {}
  async create({ productId, quantity, date }: CreateStockInputDto) {
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundError('Product not found');
    }

    const stockInput = await this.prismaService.stockInput.create({
      data: {
        productId,
        quantity,
        date,
      },
    });

    return stockInput;
  }

  findAll() {
    return `This action returns all stockInputs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockInput`;
  }
}
