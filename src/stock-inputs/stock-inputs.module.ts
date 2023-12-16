import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StockInputsController } from './stock-inputs.controller';
import { StockInputsService } from './stock-inputs.service';

@Module({
  imports: [PrismaModule],
  controllers: [StockInputsController],
  providers: [StockInputsService],
})
export class StockInputsModule {}
