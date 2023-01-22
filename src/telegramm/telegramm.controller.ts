import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TelegrammService } from './telegramm.service';
import { CreateTelegrammDto } from './dto/create-telegramm.dto';
import { UpdateTelegrammDto } from './dto/update-telegramm.dto';

@Controller('telegramm')
export class TelegrammController {
  constructor(private readonly telegrammService: TelegrammService) {}

  @Post()
  create(@Body() createTelegrammDto: CreateTelegrammDto) {
    return this.telegrammService.create(createTelegrammDto);
  }

  @Get()
  findAll() {
    return this.telegrammService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.telegrammService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTelegrammDto: UpdateTelegrammDto) {
    return this.telegrammService.update(+id, updateTelegrammDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.telegrammService.remove(+id);
  }
}
