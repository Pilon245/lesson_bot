import { Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');

@Injectable()
export class TelegramAdapter {
  //telegramSDK, TelegramClient
  private axiosInstance: AxiosInstance;
  constructor() {
    const token = new ConfigService().get('API_TOKEN');
    console.log('token', token);
    this.axiosInstance = axios.create({
      baseURL: `https://api.telegram.org/bot${token}/`,
    });
  }
  async sendMessage(text: string, recipientId: number) {
    await this.axiosInstance.post(`sendMessage`, {
      chat_id: recipientId,
      text: text,
    });
  }
  async sendWebhook(url: string) {
    await this.axiosInstance.post(`setWebhook`, {
      url: url,
    });
  }
}
export type TelegramUpdateMessage = {
  message: {
    from: {
      id: number;
      first_name: string;
      last_name: string;
    };
    text: string;
  };
};
