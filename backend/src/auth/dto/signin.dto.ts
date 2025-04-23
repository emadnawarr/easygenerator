import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class SigninDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
