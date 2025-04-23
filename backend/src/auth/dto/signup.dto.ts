import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength, Matches } from 'class-validator';

export class SignupDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  @ApiProperty()
  name: string;

  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @Matches(/(?=.*[a-zA-Z])(?=.*\d)(?=.*\W)/, {
    message:
      'Password must contain at least one letter, one number, and one special character',
  })
  @ApiProperty()
  password: string;
}
