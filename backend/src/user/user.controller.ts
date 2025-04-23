import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { AuthenticatedRequest } from 'src/auth/interfaces/AuthenticatedRequest.interface';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  @Get('data')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current authenticated user data' })
  @ApiResponse({
    status: 200,
    description: 'Returns current user details and access confirmation',
  })
  getData(@Req() req: AuthenticatedRequest) {
    return {
      message: 'Access granted!',
      user: req.user,
    };
  }
}
