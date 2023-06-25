import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TempService } from './temp.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TempService],
})
export class AppModule {}
