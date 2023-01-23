import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrammModule } from './telegramm/telegramm.module';
import { HandleTelegramUpdatesUseCase } from './use-cases/handle-telegram-updates.use-case';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TelegrammModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
