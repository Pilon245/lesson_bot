import { Module } from '@nestjs/common';
import { TelegrammService } from './telegramm.service';
import { TelegrammController } from './telegramm.controller';

@Module({
  controllers: [TelegrammController],
  providers: [TelegrammService]
})
export class TelegrammModule {}
