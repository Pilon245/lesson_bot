import { Injectable } from '@nestjs/common';
import {
  TelegramAdapter,
  TelegramUpdateMessage,
} from '../adapters/telegram.adapter';
import { IDontUnderstandMessageUseCase } from './i-dont-understand-message.use-case';
import { HowManyTimeUseCase } from './how-many-time.use-case';

@Injectable()
export class HandleTelegramUpdatesUseCase {
  constructor(
    private iDontUnderstandMessageUseCase: IDontUnderstandMessageUseCase,
    private howManyTimeUseCase: HowManyTimeUseCase,
  ) {}
  execute(payload: TelegramUpdateMessage) {
    if (payload.message.text === 'Сколько времени?') {
      this.howManyTimeUseCase.execute(payload);
    } else {
      this.iDontUnderstandMessageUseCase.execute(payload);
    }
    // sendMessage(
    //   `${payload.message.from.first_name}, вы написали: ${payload.message.text}?`,
    //   payload.message.from.id,
    // );
    return { status: 'success' };
  }
}
