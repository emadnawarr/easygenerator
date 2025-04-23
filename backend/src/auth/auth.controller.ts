import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'Signup successful' })
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @Post('signin')
  @ApiOperation({ summary: 'Login a user' })
  @ApiResponse({ status: 200, description: 'Signin successful' })
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }

  @Post('refreshToken')
  @ApiOperation({ summary: 'Generate new access token from refresh token' })
  @ApiResponse({ status: 200, description: 'Token refreshed successfully' })
  refreshToken(@Body() { refreshToken }: RefreshTokenDto) {
    return this.authService.generateAccessTokenFromRefreshToken(refreshToken);
  }
}
