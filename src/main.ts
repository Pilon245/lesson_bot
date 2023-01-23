import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as ngrok from 'ngrok';
import * as process from 'process';
import { TelegramAdapter } from './adapters/telegram.adapter';
import { Client } from 'whatsapp-web.js';

const settings = {
  currentAppBaseUrl:
    process.env.CURRENT_APP_BASE_URL || 'https://localhost:3000',
};

async function connectToNgrok() {
  const url = await ngrok.connect(3000);
  console.log('Start NGROK on ', url);
  return url;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // const telegramAdapter = await app.resolve(TelegramAdapter);
  const telegramAdapter = await app.resolve<TelegramAdapter>(TelegramAdapter);

  let baseUrl = settings.currentAppBaseUrl;

  if (true) {
    baseUrl = await connectToNgrok();
  }
  await telegramAdapter.sendWebhook(baseUrl + '/notification/telegram');

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const qrcode = require('qrcode-terminal');

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { Client } = require('whatsapp-web.js');
  const client = new Client();

  client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.on('ready', () => {
    console.log('Client is ready!');
  });

  client.initialize();

  client.on('message', (message) => {
    if (message.body === 'Hello') {
      client.sendMessage(
        message.from,
        `Hello, ${message._data.notifyName} how are you?`,
      );
      // message.reply('Hello, how are you?');
    }
    if (message.body.toLowerCase() === 'good night') {
      client.sendMessage(message.from, 'Hello, good night, how is it there?');
      if (message.body === 'your name') {
        client.sendMessage(
          message.from,
          'I do not have a name, i am your bot assistant to',
        );
      }
    }
  });
}
bootstrap();
