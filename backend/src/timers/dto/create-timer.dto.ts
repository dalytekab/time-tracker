import { ApiProperty } from "@nestjs/swagger";

export class CreateTimerDto {
    @ApiProperty({
        example: '2022-09-19T13:45:13.478Z',
        required: true,
        type: String,
        description: 'Start datetime',
    })
    startTime: string;
    @ApiProperty({
        example: '2022-09-19T13:55:13.478Z',
        required: true,
        type: String,
        description: 'End datetime',
    })
    endTime: string;
}
