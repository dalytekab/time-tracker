import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimersService } from './timers.service';
import { CreateTimerDto } from './dto/create-timer.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('timers')
@Controller('timers')
export class TimersController {
  constructor(private readonly timersService: TimersService) {}
  
  @ApiCreatedResponse({description: 'Timer has been successfully added.'})
  @Post()
  create(@Body() createTimerDto: CreateTimerDto) {
    return this.timersService.create(createTimerDto);
  }

  @Get()
  @ApiOkResponse({description: 'Timers list has been successfully returned.'})
  findAll() {
    return this.timersService.findAll();
  }

}
