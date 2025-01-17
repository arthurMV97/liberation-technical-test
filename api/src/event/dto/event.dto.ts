import { IsNotEmpty } from 'class-validator';
import { EventType } from '../event-type.enum';

export class EventDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;

  @IsNotEmpty()
  type: EventType;
}
