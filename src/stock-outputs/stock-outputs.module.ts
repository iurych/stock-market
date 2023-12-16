import { Module } from '@nestjs/common';
import { StockOutputsService } from './stock-outputs.service';
import { StockOutputsController } from './stock-outputs.controller';

@Module({
  controllers: [StockOutputsController],
  providers: [StockOutputsService],
})
export class StockOutputsModule {}
