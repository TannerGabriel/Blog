import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Payload } from '../types/payload';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService, private authService: AuthService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    tempAuth() {
        return {auth: 'works'};
    }

    @Post('login')
    async login(@Body() userDTO: LoginUserDto) {
        const user = await this.userService.findByLogin(userDTO);
        const payload: Payload = {
            email: user.email,
        };

        const token = await this.authService.signPayload(payload);
        return { user, token };
    }

    @Post('register')
    async register(@Body() userDTO: CreateUserDto) {
        const user = await this.userService.create(userDTO);
        const payload: Payload = {
            email: user.email,
        };

        const token = await this.authService.signPayload(payload);
        return { user, token };
    }
}
