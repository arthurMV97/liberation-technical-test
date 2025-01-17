import {
  Body,
  Controller,
  Delete,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { GetUser } from 'src/decorators/get-user.decorator';
import { EventService } from './event.service';
import { EventDto } from './dto/event.dto';

@Controller('event')
export class EventController {
  private logger = new Logger('TasksController');
  constructor(private eventSevice: EventService) {}

  @Post()
  createEvent(
    @Body() createEventDto: EventDto,
    @GetUser() user: User,
  ): Promise<Event> {
    this.logger.verbose(
      `User "${user.username}" creating an event. Event info: ${JSON.stringify(createEventDto)}`,
    );
    // at this point anything is accepted by thr dto -- ??
    return this.eventSevice.createEvent(createEventDto, user);
  }

  @Delete('/:id')
  deleteEvent(@Param('id') id: string, @GetUser() user: User): Promise<void> {
    return this.eventSevice.deleteEvent(id, user);
  }

  @Patch('/:id/status')
  updateEvent(
    @Param('id') id: string,
    @Body() updateEventDto: EventDto,
    @GetUser() user: User,
  ): Promise<Event> {
    updateEventDto;
    return this.eventSevice.updateEvent(id, updateEventDto, user);
  }

  
}
