import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { SigninDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './interfaces/Payload.interface';
import { SanitizedUser } from './interfaces/SanitizedUser.interface';
import { AuthResponse } from './interfaces/AuthenticatedResponse.interface';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto): Promise<AuthResponse> {
    const isExistingUser = await this.userService.findUserByEmail(signupDto.email);
    if (isExistingUser) {
      this.logger.warn(
        `Signup attempt failed: Email already registered - "${signupDto.email}"`,
      );
      throw new BadRequestException('Email is already registered');
    }

    const hashedPassword = await bcrypt.hash(signupDto.password, 10);

    const user = (
      await this.userService.addUser({ ...signupDto, password: hashedPassword })
    ).toObject();

    const sanitizedUser: SanitizedUser = {
      userId: user._id.toString(),
      email: user.email,
      name: user.name,
    };
    const payload: Payload = {
      userId: user._id.toString(),
      email: user.email,
      name: user.name,
    };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '1h',
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
    });
    this.logger.log(`User signed up successfully: ${sanitizedUser.email}`);

    return {
      message: 'Signup Successful!',
      user: sanitizedUser,
      accessToken,
      refreshToken,
    };
  }

  async signin(signinDto: SigninDto): Promise<AuthResponse> {
    const user = await this.userService.findUserByEmail(signinDto.email);
    if (!user) {
      this.logger.warn(
        `Authentication failed: No account found for email "${signinDto.email}"`,
      );
      throw new UnauthorizedException('Invalid email address!');
    }

    const isCorrectPassword = await bcrypt.compare(
      signinDto.password,
      user.password,
    );
    if (!isCorrectPassword) {
      this.logger.warn(
        `Authentication failed: Incorrect password for email "${signinDto.email}"`,
      );
      throw new UnauthorizedException('Incorrect Password!');
    }
    const sanitizedUser: SanitizedUser = {
      userId: user._id.toString(),
      email: user.email,
      name: user.name,
    };

    const payload: Payload = {
      userId: user._id.toString(),
      email: user.email,
      name: user.name,
    };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '1h',
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
    });
    this.logger.log(`User logged in: ${sanitizedUser.email}`);

    return {
      message: 'Signin Successful!',
      user: sanitizedUser,
      accessToken,
      refreshToken,
    };
  }

  async generateAccessTokenFromRefreshToken(refreshToken: string) {
    try {
      const payload = await this.jwtService.verifyAsync<Payload>(refreshToken);
      const newPayload: Payload = {
        userId: payload.userId,
        email: payload.email,
        name: payload.name,
      };
      const newAccessToken = await this.jwtService.signAsync(newPayload, {
        expiresIn: '1h',
      });
      this.logger.log(
        `New Access Token generated for user: "${newPayload.email}"`,
      );

      return {
        message: 'Access Token Generated Successfullyy!',
        accessToken: newAccessToken,
      };
    } catch (err) {
      this.logger.warn(`Refresh Access Token Generation failed!`);
      throw new BadRequestException('Invalid refresh token');
    }
  }
}
