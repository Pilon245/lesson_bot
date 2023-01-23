import { Injectable } from '@nestjs/common';
import {
  TelegramAdapter,
  TelegramUpdateMessage,
} from '../adapters/telegram.adapter';

@Injectable()
export class HowManyTimeUseCase {
  constructor(private telegramAdapter: TelegramAdapter) {}
  execute(payload: TelegramUpdateMessage) {
    this.telegramAdapter.sendMessage(`${new Date()}`, payload.message.from.id);
  }
}
