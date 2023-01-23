import { Injectable } from '@nestjs/common';
import {
  TelegramAdapter,
  TelegramUpdateMessage,
} from '../adapters/telegram.adapter';

@Injectable()
export class IDontUnderstandMessageUseCase {
  constructor(private telegramAdapter: TelegramAdapter) {}
  execute(payload: TelegramUpdateMessage) {
    this.telegramAdapter.sendMessage(
      `Сорри, я туповат`,
      payload.message.from.id,
    );
  }
}
