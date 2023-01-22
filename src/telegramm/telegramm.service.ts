import { Injectable } from '@nestjs/common';
import { CreateTelegrammDto } from './dto/create-telegramm.dto';
import { UpdateTelegrammDto } from './dto/update-telegramm.dto';

@Injectable()
export class TelegrammService {
  create(createTelegrammDto: CreateTelegrammDto) {
    return 'This action adds a new telegramm';
  }

  findAll() {
    return `This action returns all telegramm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} telegramm`;
  }

  update(id: number, updateTelegrammDto: UpdateTelegrammDto) {
    return `This action updates a #${id} telegramm`;
  }

  remove(id: number) {
    return `This action removes a #${id} telegramm`;
  }
}
