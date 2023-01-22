import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as ngrok from 'ngrok';
import * as process from 'process';

// const settings = {
//   currentAppBaseUrl:
//     process.env.CURRENT_APP_BASE_URL || 'https://localhost:3000',
// };
//
// async function connectToNgrok() {
//   const url = await ngrok.connect(3000);
//   console.log('Start NGROK on ', url);
//   return url;
// }
//
// async function sendOurHookToTelegram(url: string) {
//   //send url + ''
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // let baseUrl = settings.currentAppBaseUrl;
  //
  // if (true) {
  //   baseUrl = await connectToNgrok();
  // }
  // await sendOurHookToTelegram(baseUrl);
}
bootstrap();
