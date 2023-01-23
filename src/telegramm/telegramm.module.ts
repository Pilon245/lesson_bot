import { Module } from '@nestjs/common';
import { TelegrammService } from './telegramm.service';
import { TelegrammController } from './telegramm.controller';
import { HandleTelegramUpdatesUseCase } from '../use-cases/handle-telegram-updates.use-case';
import { TelegramAdapter } from '../adapters/telegram.adapter';
import { HowManyTimeUseCase } from '../use-cases/how-many-time.use-case';
import { IDontUnderstandMessageUseCase } from '../use-cases/i-dont-understand-message.use-case';

@Module({
  controllers: [TelegrammController],
  providers: [
    TelegrammService,
    TelegramAdapter,
    HandleTelegramUpdatesUseCase,
    HowManyTimeUseCase,
    IDontUnderstandMessageUseCase,
  ],
})
export class TelegrammModule {}
