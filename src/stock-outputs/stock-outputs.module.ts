import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StockOutputsController } from './stock-outputs.controller';
import { StockOutputsService } from './stock-outputs.service';

@Module({
  imports: [PrismaModule],
  controllers: [StockOutputsController],
  providers: [StockOutputsService],
})
export class StockOutputsModule {}
