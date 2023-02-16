import {
  Body,
  Controller,
  Post,
  Param,
  Delete,
  Put,
  Get,
  HttpException,
} from '@nestjs/common';
import { FligthDTO } from './dto/fligth.dto';
import { FligthService } from './fligth.service';
import { HttpStatus, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FligthMSG } from '../common/contants';

@Controller()
export class FligthController {
  constructor(private readonly fligthService: FligthService) {}
  @MessagePattern(FligthMSG.CREATE)
  create(@Payload() fligthDTO: FligthDTO) {
    return this.fligthService.create(fligthDTO);
  }

  @MessagePattern(FligthMSG.FIND_ALL)
  findAll() {
    return this.fligthService.findAll();
  }

  @MessagePattern(FligthMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.fligthService.findOne(id);
  }

  @MessagePattern(FligthMSG.UPDATE)
  update(@Payload() payload: any) {
    return this.fligthService.update(payload.id, payload.fligthDTO);
  }

  @MessagePattern(FligthMSG.DELETE)
  remove(@Payload() id: string) {
    return this.fligthService.delete(id);
  }
  @MessagePattern(FligthMSG.ADD_PASSENGER)
  async addPassenger(@Payload() payload: any) {
    return this.fligthService.addPassenger(
      payload.fligthId,
      payload.passengerId,
    );
  }
}
