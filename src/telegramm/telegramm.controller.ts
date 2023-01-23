import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TelegrammService } from './telegramm.service';
import { CreateTelegrammDto } from './dto/create-telegramm.dto';
import { UpdateTelegrammDto } from './dto/update-telegramm.dto';
import {
  TelegramAdapter,
  TelegramUpdateMessage,
} from '../adapters/telegram.adapter';
import { HandleTelegramUpdatesUseCase } from '../use-cases/handle-telegram-updates.use-case';

@Controller('notification')
export class TelegrammController {
  constructor(
    private readonly telegrammService: TelegrammService,
    private handleTelegramUpdatesUseCase: HandleTelegramUpdatesUseCase,
  ) {}

  @Post()
  create(@Body() createTelegrammDto: CreateTelegrammDto) {
    return this.telegrammService.create(createTelegrammDto);
  }

  @Post()
  send(@Body() createTelegrammDto: CreateTelegrammDto) {
    return this.telegrammService.create(createTelegrammDto);
  }

  @Post('telegram')
  forTelegramHook(@Body() payload: TelegramUpdateMessage) {
    console.log('payload', payload);
    this.handleTelegramUpdatesUseCase.execute(payload);
  }
  @Post('Whatsapp')
  forWhatsAppHook(@Body() payload: TelegramUpdateMessage) {
    console.log('payload', payload);
    this.handleTelegramUpdatesUseCase.execute(payload);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.telegrammService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTelegrammDto: UpdateTelegrammDto,
  ) {
    return this.telegrammService.update(+id, updateTelegrammDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.telegrammService.remove(+id);
  }
}
