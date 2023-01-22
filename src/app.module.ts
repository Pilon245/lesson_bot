import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrammModule } from './telegramm/telegramm.module';

@Module({
  imports: [TelegrammModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
